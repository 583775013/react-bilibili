/**
 * 分类
 */
class PartitionType {
  constructor(public id: number, public name: string,public isTop: boolean=false, public children: PartitionType[] = []) {}
}

function createPartitionTypes(data): PartitionType[] {
  return data.map((item) => new PartitionType(item.tid, item.typename,item.isTop));
}

function createPartitionTypesTree(data): PartitionType[] {
  if (data) {
    let partitionTtypes = [];
    const firstTypes = data.filter(item=>item.type =="1");
    if (firstTypes) {
      partitionTtypes = firstTypes.map((item) => {
        const id = item.tid;
        return new PartitionType(id, item.typename,item.isTop,item.children?createPartitionTypes(item.children):[]);
      });
    }
    return partitionTtypes;
  }
}

export {
  PartitionType,
  createPartitionTypes,
  createPartitionTypesTree
}
