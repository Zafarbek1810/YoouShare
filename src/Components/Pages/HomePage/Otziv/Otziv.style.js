import styled from "styled-components";

const OtzivWrapper = styled.div`
  padding: 100px 0;
  position: relative;
  background: #fff;
  h3.title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #001002;
  }

  .mySwiper {
    margin-top: 30px;

    .swiper-slide-active {
      .card {
        transform: scale(1.1);
      }
    }
    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      width: 100%;
      height: auto;
      background: #f3fcf6;
      border-radius: 40px;
      padding-right: 30px;
      position: relative;

      .icon {
        position: absolute;
        top: 20px;
        left: 40%;
      }

      &__img {
        width: 50%;
        img {
          width: 100%;
        }

        svg{
          width: 100%;
          fill: #0CB47F;
        }
      }

      &__content {
        width: 50%;
        padding: 50px 0;
      }
      &__text {
        font-family: "Inter";
        font-style: normal;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #001002;
        margin: 40px 0 20px;
      }
      &__title {
        display: flex;
        flex-direction: column;
        color:#000;
        text-align: center;

        span {
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.02em;
          color: #556057;
        }
      }
    }
  }

  .prev {
    border: none;
    background: #0cb47f;
    border-radius: 10px;
    position: absolute;
    z-index: 44;
    top: 48%;
    left: 20%;
    padding: 5px;
  }
  .next {
    border: none;
    background: #0cb47f;
    border-radius: 10px;
    position: absolute;
    z-index: 44;
    top: 48%;
    left: 77%;
    padding: 5px;
  }

  .mySwiper {
    padding-bottom: 50px;
    padding-top: 50px;
    .swiper-pagination-bullets {
      margin-top: 30px;

      .swiper-pagination-bullet-active {
        background: #0cb47f;
        width: 24px;
        height: 8px;
        border-radius: 8px;
      }
    }
  }

  @media (max-width: 768px) {
    h3.title {
      font-size: 30px;
      line-height: 36px;
    }
    .mySwiper {
      padding-bottom: 70px;
    }
    .card {

      &__content {
        width: 80% !important;
        padding: 20px 0 !important;

        &__text {
          font-size: 12px !important;
        }
      }
    }

    .prev {
      border: none;
      background: #0cb47f;
      border-radius: 10px;
      position: absolute;
      z-index: 44;
      top: 48%;
      left: 0;
      padding: 5px;
    }
    .next {
      border: none;
      background: #0cb47f;
      border-radius: 10px;
      position: absolute;
      z-index: 44;
      top: 48%;
      left: 90%;
      padding: 5px;
    }
  }
`;
export { OtzivWrapper };
