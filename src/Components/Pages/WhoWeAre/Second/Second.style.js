import styled from "styled-components";

const SecondStyle = styled.div`
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
      width: 30%;
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
        background: url("./images/youshare.jpg") no-repeat center center/cover;
        height: auto;
        width: 100%;
        padding: 50px 0;

        .cards {
            flex-direction: column;
            gap: 20px;

            .card {
                width: 100%;
            }
        }
    }



`

export default SecondStyle;