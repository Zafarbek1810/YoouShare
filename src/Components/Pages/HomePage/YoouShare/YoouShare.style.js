import styled from "styled-components";

const YoouShareWrapper = styled.div`
  background: rgba(0, 16, 2, 0.02);
  padding: 100px 0;

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #001002;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
  }

  p.sub {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #001002;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .cards {
      display: flex;
      gap: 20px;
    .card {
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(9, 37, 48, 0.12);
      border-radius: 30px;
      padding: 30px 40px 30px;
      width: 25%;
      display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      h6 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #001002;
        margin-bottom: 20px;
      }

      img {
        width:80%;
        height: auto;
        margin: auto ;
        object-fit: cover;
        display: flex;
        justify-content: center;
      }

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 48px;
        color: #001002;
        text-align: center;
        span {
          font-size: 16px;
        }
      }
    }
  }

  //make responsive
  @media (max-width: 768px) {
    .cards {
      flex-direction: column;
      gap: 20px;
      .card {
        width: 100%;
      }

      .card:nth-child(2) {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    .cards {
      flex-direction: column;
      gap: 20px;
      .card {
        width: 100%;
      }

      .card:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
  
`;

export default YoouShareWrapper;
