import styled from "styled-components";

const VideoCompStyle = styled.div`
  padding: 0 100px 50px;
  background: #fff;
  .videoWrap{
    border-radius: 30px;
  }
  .video {
    width: 100%;
    height: auto;
    border-radius: 30px !important;
    text-align: center;
  }

  .react-player__preview{
    border-radius: 30px !important;
  }

  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;
  }

  @media (max-width: 576px) {
    padding: 50px 0;
  }
  
`;

export { VideoCompStyle };
