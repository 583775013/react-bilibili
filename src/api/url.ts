const prefix = process.env.URL_PREFIX;

// 首页
const URL_INDEX = prefix + "/index";
//轮播图
const URL_ROUND_SOWING = prefix + "/banner";
//分类
const URL_PARTITION = prefix + "/partitions";
//排行榜
const URL_RANKING = prefix + "/ranking";
//分类排行榜
const URL_RANKING_REGION = prefix + "/ranking/region";
//当前分类排行
const URL_RANKING_ARCHIVE = prefix + "/ranking/archive";
//获取排行榜页面分类
const URL_RANKING_PARTITION = prefix + "/ranking/partitions";

//视频详情
const URL_VIDEO_DETAIL = prefix + "/av";
//视频推荐
const URL_VIDEO_RECOMMEND = prefix + "/av/recommend";

const URL_VIDEO_REPLAY = prefix + "/av/replay";
//视频弹幕
const URL_VIDEO_BARRAG = prefix + "/av/barrage";
//视频播放地址
const URL_PLAY_URL = prefix + "/av/playUrl";

const URL_UP_USER = prefix + "/up";
const URL_USER_VIDEO = prefix + "/up/video";

const URL_SEARCH_HOTWORD = prefix + "/search/hotword";
const URL_SEARCH_SUGGEST = prefix + "/search/suggest";
const URL_SEARCH = prefix + "/search";

const URL_LIVE_AREA = prefix + "/live/area";
const URL_LIVE_DATA = prefix + "/live/data";
const URL_LIVE_LIST = prefix + "/live/room/list";
const URL_LIVE_ROOM_INFO = prefix + "/live/room/info";
const URL_LIVE_ROOM_GIFT = prefix + "/live/room/gifts";
const URL_LIVE_PLAY_URL = prefix + "/live/room/play_url";
const URL_LIVE_DANMU_CONFIG = prefix + "/live/room/danmu_config";

export {
  URL_INDEX,
  URL_ROUND_SOWING,
  URL_PARTITION,
  URL_RANKING,
  URL_RANKING_REGION,
  URL_RANKING_ARCHIVE,
  URL_RANKING_PARTITION,
  URL_VIDEO_DETAIL,
  URL_VIDEO_RECOMMEND,
  URL_VIDEO_REPLAY,
  URL_VIDEO_BARRAG,
  URL_PLAY_URL,
  URL_UP_USER,
  URL_USER_VIDEO,
  URL_SEARCH_HOTWORD,
  URL_SEARCH_SUGGEST,
  URL_SEARCH,
  URL_LIVE_AREA,
  URL_LIVE_DATA,
  URL_LIVE_LIST,
  URL_LIVE_ROOM_INFO,
  URL_LIVE_ROOM_GIFT,
  URL_LIVE_PLAY_URL,
  URL_LIVE_DANMU_CONFIG
}
