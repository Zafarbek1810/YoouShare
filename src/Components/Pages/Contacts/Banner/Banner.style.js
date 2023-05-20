import styled from "styled-components";

const BannerStyle = styled.div`
  padding-top: 100px;
  background: #fff;
  h3.title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #001002;
    margin-bottom: 75px;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 40px;
    margin-bottom: 100px;

    .item {
      width: 25%;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #001002;
      margin-top: 30px;
    }
  }

  //make responsive
    @media (max-width: 768px) {
    padding-top: 150px;

    h3.title {
        font-size: 36px;
        line-height: 46px;
        margin-bottom: 30px;
    }

    .wrap {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 50px;

        .item {
            width: 100%;
        }
    }
    }

`;

export default BannerStyle;
