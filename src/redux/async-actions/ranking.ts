import { AnyAction, Dispatch } from "redux";
import { setShouldLoad, setRankingPartitions, setRankingVideos } from "../actions";
import { getRankingPartitions } from "../../api/partitions";
import { getRankings } from "../../api/ranking";
import { createPartitionTypes, createVideoByRanking } from "../../models";

export function getRankingVideoList(rId: number) {
  return (dispatch: Dispatch<AnyAction>) => {
    return Promise.all([
      getRankingPartitions(),
      getRankings(rId)
    ]).then(([result1, result2]) => {
      if (result1.code == "1") {
        let partitions = createPartitionTypes(result1.data);
        dispatch(setRankingPartitions(partitions));
      }
      if (result2.code == "1") {
        const list = result2.data;
        const rankingVideos = list.map((data) => createVideoByRanking(data));
        dispatch(setRankingVideos(rankingVideos.splice(0, 30)));
      }
      if (process.env.REACT_ENV === "server") {
        dispatch(setShouldLoad(false));
      }
    })
  }
}

export function getVideoList(rId: number) {
  return (dispatch) => {
    return getRankings(rId).then((result) => {
      if (result.code == "1") {
        const list = result.data;
        const rankingVideos = list.map((data) => createVideoByRanking(data));
        dispatch(setRankingVideos(rankingVideos.splice(0, 30)));
      }
    })
  }
}
