import { AnyAction, Dispatch } from "redux";
import { getBanner } from "../../api/index";
import { getPartitions } from "../../api/partitions"
import { createPartitionTypes, createVideo, createVideoByRanking } from "../../models";
import {
  setOneLevelPartitions,
  setBanners,
  setRankingVideos
} from "../actions";
import { getRankings } from "../../api/ranking";

export default function getIndexContent() {
  // dispatch由thunkMiddleware传入
  return (dispatch: Dispatch<AnyAction>, getState) => {
    const promises = [
      getPartitions(),
      getBanner(),
      getRankings(0),
    ];
    return Promise.all(promises).then(([result1, result2, result3]) => {
      if (result1.code == "1") {
        const partitions = result1.data;
        let oneLevels =  createPartitionTypes(partitions);
        dispatch(setOneLevelPartitions(oneLevels));
        console.log("getPartitions")
      }
      if (result2.code == "1") {
        const data = result2.data;
        if (data) {
          const banners = data.map((item) => (
            {
              id: item.id,
              name: item.name,
              pic: item.pic,
              url: item.url
            }
          ));
          dispatch(setBanners(banners));
          console.log("banners")
        }
      }
      if (result3.code == "1") {
        const list = result3.data;
        const rankingVideos = list.map((data) => createVideoByRanking(data));
        dispatch(setRankingVideos(rankingVideos));
        console.log("rankingVideos")
      }
    });
  }
}
