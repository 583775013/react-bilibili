import { AnyAction, Dispatch } from "redux";
import { setPartitions } from "../actions";
import { getPartitions } from "../../api/partitions";
import { createPartitionTypesTree } from "../../models/PartitionType";

export default function getPartitionList() {
  console.log("partitions")
  return (dispatch: Dispatch<AnyAction>) => {
    return getPartitions().then((result) => {
      if (result.code == "1") {
        let partitions = createPartitionTypesTree(result.data);
        dispatch(setPartitions(partitions));
      }
    });
  }
}
