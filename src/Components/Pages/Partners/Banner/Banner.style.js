import styled from "styled-components";

const BannerWrapper = styled.div`
  padding-top: 100px;
  background: #ffffff;
  .wrap {
    .top {
      padding: 0 100px;
      position: relative;

      .qr {
        position: absolute;
        bottom: 0;
        left: 0;
      }

      h3.title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: #001002;
        margin: 20px 0;
      }

      img {
        width: 100%;
        height: calc(100vh - 200px);
        object-fit: cover;
        border-radius: 30px;
      }
    }

    .bottom {
      padding: 75px 0;

      .wrap {
        display: flex;
        justify-content: space-between;

        .title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 44px;
          color: #001002;
        }
        .left {
          width: 50%;

          ul {
            li {
              display: flex;
              align-items: center;
              font-family: "Inter";
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 28px;
              color: #001002;
              margin-bottom: 20px;

              img {
                margin-right: 10px;
                width: 24px;
              }
            }
          }
        }

        .right {
          width: 50%;
          ul {
            li {
              display: flex;
              flex-direction: column;
              span {
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;
                color: #0cb47f;
              }
              font-family: "Inter";
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 28px;
              color: #001002;
            }
          }
        }
      }
      .btn {
        text-align: center;
        button {
          width: 40%;
          margin-top: 15px;
          text-align: center;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;
          color: #ffffff;
          background: #0cb47f;
          border-radius: 10px;
          padding: 10px 20px;
          border: none;
          cursor: pointer;

          &:hover {
            cursor: pointer;
            background: rgb(12, 180, 127, 0.8);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
              0px 2px 4px rgba(0, 0, 0, 0.12);
            color: #ffffff;
            transition: 0.3s ease-in-out all;
          }
        }
      }
    }
  }

  //make responsive
  @media (max-width: 768px) {
    .wrap {
      .top {
        padding: 0 20px;

        h3.title {
          font-size: 32px;
          line-height: 42px;
        }

        img {
          height: 400px;
        }
      }

      .bottom {
        padding: 50px 0;

        .wrap {
          flex-direction: column;

          .title {
            font-size: 24px;
            line-height: 34px;
          }

          .left {
            width: 100%;
            margin-bottom: 20px;
          }

          .right {
            width: 100%;
          }

          .btn {
            button {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .wrap {
      .top {
        padding: 0 20px;

        h3.title {
          font-size: 24px;
          line-height: 34px;
        }

        img {
          height: 300px;
        }

        .qr {
          display: none;
        }
      }

      .bottom {
        padding: 50px 0;

        .wrap {
          flex-direction: column;

          .title {
            font-size: 24px;
            line-height: 34px;
          }

          .left {
            width: 100%;
            margin-bottom: 20px;
          }

          .right {
            width: 100%;
          }

        }
      }
      .btn {
        width: 100% !important;
        button {
          width: 100% !important;
        }
      }
    }

  }
`;

export default BannerWrapper;
