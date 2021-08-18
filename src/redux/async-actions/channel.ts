import { AnyAction, Dispatch } from "redux";
import { setPartitions } from "../actions";
import { getPartitions } from "../../api/partitions";
import { createPartitionTypesTree } from "../../models/PartitionType";

export default function getPartitionList() {
  return (dispatch: Dispatch<AnyAction>) => {
    return getPartitions().then((result) => {
      if (result.code == "1") {
        let partitions = createPartitionTypesTree(result.data);
        console.error("222===>"+partitions);
        // 过滤掉 番剧，电影，电视剧，纪录片
        dispatch(setPartitions(partitions));
      }
    });
  }
}
