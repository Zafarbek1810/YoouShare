import styled from "styled-components";

const BannerWrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background: #fff;
  position: relative;

  .wrap {
    display: flex;
    align-items: center;
    margin-top: 50px;

    .left {
      width: 50%;

      h3.title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 42px;
        color: #001002;
        margin-bottom: 30px;

        span {
          font-weight: 700;
          font-size: 48px;
          line-height: 56px;
        }
      }

      p.subtitle {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #556057;
        margin-bottom: 20px;
      }

      ul {
        padding: 0;

        li {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #001002;
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          svg{
            margin-right : 10px;

          }

          img{
            width: 40px;
          }
        }
      }
    }

    .right {
      width: 50%;
      display: flex;
      img {
        margin-left: auto;
        height: calc(100vh - 170px);
      }
    }
  }

  .qr{
    position: absolute;
    bottom: 0;
    left: 0;
  }


  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 50px;
    .wrap {
      flex-direction: column;
      .left {
        width: 100%;
        margin-bottom: 50px;
      }
      .right {
        width: 100%;
        img {
          height: auto;
          width: 80%;
          margin: auto;
        }
      }
    }

    .qr{
      display: none;
    }
  }

  @media (max-width: 576px) {
    .wrap {
      .left {
        h3.title {
          font-size: 24px;
          line-height: 28px;
          span {
            font-size: 32px;
            line-height: 37px;
          }
        }
        p.subtitle {
          font-size: 16px;
          line-height: 19px;
        }
        ul {
          li {
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
    }
  }

`;

export default BannerWrapper;
