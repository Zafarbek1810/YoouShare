import styled from "styled-components";

const InvestWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/partners.jpg") no-repeat center center;
  background-size: cover;
  padding: 100px 0;

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    text-align: center;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;

    .card {
      width: 30%;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12.5px);
      border-radius: 30px;
      padding: 50px 40px;
      &__title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 15px;
      }

      &__text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #ffffff;
        white-space: pre-wrap;
      }
    }
  }

  .btn {
      text-align: center;
    button {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #0cb47f;
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
        padding: 15px 30px;
        border: none;
        cursor: pointer;
    }
  }

  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;

    .title {
      font-size: 32px;
      line-height: 42px;
    }


    .cards {
      flex-direction: column;
      .card {
        width: 100%;
        margin-bottom: 30px;

        &__title {
          font-size: 24px;
          line-height: 28px;

          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;

            margin-top: 30px;
          }
        }

        &__text {
          font-size: 16px;
          line-height: 20px;
        }

      }
    }

    .btn {
      width: 100% ;
      button {
        width: 100%;
        padding: 10px 20px;
      }
    }
  }


  

`;

export default InvestWrapper;
