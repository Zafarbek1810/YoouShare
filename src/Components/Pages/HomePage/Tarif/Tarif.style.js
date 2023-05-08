import styled from "styled-components";

const TarifWRapper = styled.div`
  background: url("./images/youshare.jpg") no-repeat center center/cover;
  height: auto;
  width: 100%;
  padding: 100px 0;

  h3.title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    text-align: center;
    margin: 0;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    gap: 20px;

    .card {
      width: 25%;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12.5px);
      border-radius: 30px;
      padding: 50px 20px;
      text-align: center;
      &__title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 20px;
      }

      &__price {
        display: flex;
        flex-direction: column;

        &__number {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 42px;
          color: #ffffff;
        }

        &__currency {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 30px;
          color: #ffffff;
        }
      }
    }
  }

  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;

    h3.title {
      font-size: 36px;
      line-height: 42px;
    }

    .cards {
      flex-direction: column;
      gap: 20px;

      .card {
        width: 100%;
        padding: 30px 20px;

        &__title {
          font-size: 16px;
          line-height: 20px;
        }

        &__price {
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;

          &__number {
            font-size: 24px;
            line-height: 28px;
          }

          &__currency {
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    .cards {
      .card {
        &__title {
          font-size: 14px;
          line-height: 16px;
        }

        &__price {
          &__number {
            font-size: 20px;
            line-height: 24px;
          }

          &__currency {
            font-size: 12px;
            line-height: 14px;
          }
        }
      }
    }
  }
`;
export default TarifWRapper;
