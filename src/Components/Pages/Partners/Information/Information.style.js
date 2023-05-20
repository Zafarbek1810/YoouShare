import styled from "styled-components";

const InformationWrapper = styled.div`
  background-color: #fff;
  padding: 100px 0;

  h3.title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #001002;
    text-align: center;
    margin-bottom: 50px;
  }

  .wrap {
    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        width: 50%;
      }
      .right {
        width: 50%;
      }

      .img {
        width: 100%;
        text-align: center;
        img {
          width: 90%;
        }
      }

      h4 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        color: #001002;
        margin-bottom: 20px;
      }

      table {
        tbody {
          tr {
            td {
              font-family: "Inter";
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 24px;
              color: #001002;
              padding-bottom: 10px;
            }

            td:first-child {
              font-weight: 400;
            }
          }
        }
      }
    }
  }

  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;

    h3.title {

      font-size: 32px;
      line-height: 42px;

      margin-bottom: 30px;
    }

    .wrap {
      .box {
        flex-direction: column;
        margin-bottom: 50px;

        img{
          margin-bottom: 20px;
        }

        .left {
          width: 100%;
          margin-bottom: 30px;
        }
        .right {
          width: 100%;
        }
      }
      .box2 {
        flex-direction: column-reverse;
        margin-bottom: 50px;

        img{
          margin-bottom: 20px;
        }
      }
    }

  }


`;

export default InformationWrapper;
