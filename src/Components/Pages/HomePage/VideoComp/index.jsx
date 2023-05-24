import React from "react";
import { VideoCompStyle } from "./VideoComp.style";
import ReactPlayer from "react-player";
import PlayIconSVg from "../../../Common/Svgs/PlayIconSVg";

const VideoComp = () => {

  return (
    <VideoCompStyle>
      <div className="videoWrap" data-aos={"fade-up"}>
        <ReactPlayer
          width="100%"
          height="500px"
          playIcon={<PlayIconSVg />}
          className="video"
          url="/images/video.mp4"
          light="/images/videoPoster.jpg"
          controls={true}
          playing={true}
            style={{borderRadius:30}}
        />
      </div>
    </VideoCompStyle>
  );
};

export default VideoComp;
