import { UpUser } from "./UpUser";
import { PartitionType } from "./PartitionType";

/**
 * 视频
 */
class Video {
  constructor(
    public aId: number,
    public title: string,
    public pic: string,
    public desc: string,
    public playCount: number,
    public barrageCount: number,
    public publicDate: number,
    public duration: any,
    public cId: number,
    public url: string,
    public owner: UpUser = null ,
    public twoLevel: PartitionType = null,
    public oneLevel: PartitionType = null) {}
}

function createVideo(data): Video {
  return new Video(
    data.aid,
    data.title,
    data.pic,
    data.desc,
    data.play,
    data.danMu,
    data.pubdate,
    data.duration,
    data.cid,
    data.initUrl,
    new UpUser(data.mid, data.name, data.face),
    data.tid ? new PartitionType(data.tid, data.tname,false) : null,
    data.reid ? new PartitionType(data.reid, data.toptype,false) : null
  );
}

function createVideoByDetail(data): Video {
  return new Video(
    data.aid,
    data.title,
    data.pic,
    data.desc,
    data.play,
    data.danMu,
    data.pubDate,
    data.duration,
    null,
    "",
    new UpUser(data.mid,"", ""),
    data.tid ? new PartitionType(data.tid, data.tname,false) : null,
    // data.reid ? new PartitionType(data.reid, data.toptype) : null
  );
}

function createVideoByRanking(data): Video {
  return new Video(
    parseInt(data.aid, 10),
    data.title,
    data.pic,
    "",
    data.play,
    data.videoReview,
    0,
    data.duration,
    0,
    "",
    new UpUser(0, data.author, "")
  );
}

function createVideoByLatest(data): Video {
  return new Video(
    data.aid,
    data.title,
    data.pic,
    data.desc,
    data.play,
    data.danMu,
    data.pubdate,
    data.duration,
    data.cid,
    "",
    new UpUser(data.mid, data.author, data.face)
  );
}

function createVideoByUser(data): Video {
  return new Video(
    data.aid,
    data.title,
    data.pic,
    "",
    data.play,
    data.video_review,
    0,
    data.length,
    0,
    "",
    new UpUser(data.mid, data.author, "")
  );
}

function createVideoBySearch(data): Video {
  const seconds = parseInt(data.duration);
  return new  Video(
    data.aid,
    data.title,
    data.pic,
    data.title,
    data.play,
    data.danMu,
    data.ctime,
    seconds,
    0,
    "",
    new UpUser(data.mid, data.author, "")
  );
}

export {
  Video,
  createVideo,
  createVideoByDetail,
  createVideoByRanking,
  createVideoByLatest,
  createVideoByUser,
  createVideoBySearch
}
