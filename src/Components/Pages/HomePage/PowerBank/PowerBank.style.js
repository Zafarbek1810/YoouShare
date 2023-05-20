import styled from "styled-components";

const PowerBankWrapper = styled.div`
  padding: 100px 0;
  background: #fff;
  .wrap {
    display: flex;
    align-items: center;

    .left {
      width: 50%;
      display: flex;
      img {
        margin: auto;
        height: calc(100vh - 170px);
      }
    }

    .right {
      width: 50%;

      h3.title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 48px;
        color: #001002;
        margin-bottom: 20px;

        span {
          color: rgba(12, 180, 127, 1);
        }
      }

      p.descr {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #001002;
        margin-bottom: 10px;
      }
      h6 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #001002;
        margin-top: 10px;
      }

      ul {
        padding-left: 30px;
        li {
          list-style: disc;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #001002;
        }
      }

      .yomkost,
      .zaryad {
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #001002;
        }
      }
    }
  }

  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;

    .wrap {
      flex-direction: column;
      .left {
        width: 100%;
        img {
          height: auto;
          width: 90%;
          margin-bottom: 20px;
        }
      }

      .right {
        width: 100%;
        h3.title {
          font-size: 36px;
          line-height: 42px;
        }

        p.descr {
          font-size: 16px;
          line-height: 20px;
        }
        h6 {
          font-size: 16px;
          line-height: 20px;
        }

        ul {
          padding-left: 20px;
          li {
            font-size: 14px;
            line-height: 20px;
          }
        }

        .yomkost,
        .zaryad {
          p {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .wrap {
      flex-direction: column;

      .left {
        width: 100%;
        img {
          height: auto;
        }
      }

      .right {
        width: 100%;
        h3.title {
          font-size: 24px;
          line-height: 30px;
        }

        p.descr {
          font-size: 14px;
          line-height: 20px;
        }
        h6 {
          font-size: 14px;
          line-height: 20px;
        }

        ul {
          padding-left: 20px;
          li {
            font-size: 14px;
            line-height: 20px;
          }
        }

        .yomkost,
        .zaryad {
          p {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
`;

export { PowerBankWrapper };
