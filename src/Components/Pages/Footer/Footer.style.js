import styled from "styled-components";

const FooterWrapper = styled.div`
  background: #001002;

  .wrap {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;

    .col-1 {
      width: 30%;

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
        margin-top: 20px;
      }
    }

    .col-2 {
      width: 30%;

      .title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 30px;
      }

      .app {
        a {
          background: #0cb47f;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
            0px 2px 4px rgba(0, 0, 0, 0.12);
          border-radius: 8px;
          padding: 10px 8px 8px 8px;
          margin-right: 10px;

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .col-3 {
      width: 30%;

      .title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 30px;
      }

      .contact {
        a {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #ffffff;
          display: flex;
          align-items: center;

          svg {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .copy {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    .left {
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.02em;
        color: #ffffff !important;
      }
    }

    .center {
      p {
        font-family: "Inter";

        font-style: normal;
        font-weight: 400;

        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.02em;
        color: #ffffff;

        a {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.02em;
          color: #ffffff;
        }
      }
    }

    .right {
      color: #0cb47f;
      a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #0cb47f;
      }
    }
  }

  //make responsive
  @media (max-width: 768px) {
    .wrap {
      flex-direction: column;

      .col-1 {
        width: 100%;
        margin-bottom: 30px;
      }

      .col-2 {
        width: 100%;
        margin-bottom: 30px;
      }

      .col-3 {
        width: 100%;
        margin-bottom: 30px;
      }
    }

    .copy {
      flex-direction: column;
    }
  }

  //make responsive
  @media (max-width: 576px) {
    .wrap {
      .col-1 {
        width: 100%;
        margin-bottom: 30px;
      }

      .col-2 {
        width: 100%;

        .app {
          display: flex;

          a {
            svg {
              width: 20px;
              height: 20px;
            }
          }
        }
      }

      .col-3 {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
`;

export default FooterWrapper;
