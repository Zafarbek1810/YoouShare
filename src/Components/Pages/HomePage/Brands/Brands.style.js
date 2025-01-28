import styled from "styled-components";

const BrandsWrapper = styled.div`
  padding: 100px 0;
  background: #FAFAFA !important;

  h3.title {
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #001002;
    margin-bottom: 30px;
  }

  .brands {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: 1000ms ease-in-out all;
    &__item {
      width: calc(100% / 6);
      margin-bottom: 10px;

      img {
        width: 90%;
        border-radius: 20px;
      }
    }
  }

  .btn {
    text-align: center;
    button {
      background: transparent;
      border: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #0cb47f;
     
      &:hover{
        cursor: pointer;
      }
    }
  }

  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;
    h3.title {
      font-size: 30px;

      line-height: 36px;
    }
    .brands {
      justify-content: center;
      .brands__item {
        width: calc(100% / 3);
      }
    }
  }

`;

export { BrandsWrapper };
