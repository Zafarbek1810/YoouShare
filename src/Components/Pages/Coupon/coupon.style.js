import styled from "styled-components";

const CouponStyle = styled.div`
  background-image: url("/images/bgKupon.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .wrapper {
    width: 890px;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #ffffff;
      margin-top: 40px;
      text-align: center;
      white-space: pre-wrap;
    }
  }
  .submit {
    display: flex;
    align-items: center;
    gap: 40px;
    padding-top: 30px;
    padding-left: 25px;
  }
  .inputNumber {
    width: 45%;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding: 12px 12px;
    color: #000;
    font-size: 20px;
  }
  .PhoneInputInput {
    width: 45%;
    border: none !important;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding: 12px 12px;
    color: #000;
    font-size: 20px;
  }
  .PhoneInputCountrySelectArrow {
    border-color: #fff;
  }
  .PhoneInputInput--focus {
    border: none !important;
  }
  .btn {
    padding: 14px 50px;
    font-size: 16px;
    text-align: center;
    background: #0cb47f;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    color: #ffffff;
    border: none;
    &:hover {
      cursor: pointer;
      background: rgb(12, 180, 127, 0.8);
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.12);
      color: #ffffff;
      transition: 0.3s ease-in-out all;
    }
  }
  .qr {
    padding-top: 30px;
    img {
      width: 200px;
    }
  }

  .modal {
    animation: animate 0.5s ease-in-out;
    position: absolute;
    top: 10%;
    left: calc(50% -135px);
    z-index: 9999;
  }

  @keyframes animate {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    height: auto;
    .wrapper {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p {
        font-family: "Inter";
        font-style: normal;
        font-size: 15px;
        color: #ffffff;
        padding: 1px 15px;
      }
    }
    .submit {
      flex-direction: column;
      width: 100%;
      gap: 25px;
      padding: 16px 0;
    }
    .btn {
      padding: 14px 40px;
    }
    .inputNumber {
      width: 75%;
    }
    .qr {
      padding-top: 30px;
      img {
        width: 180px;
      }
    }
  }
`;
export default CouponStyle;
