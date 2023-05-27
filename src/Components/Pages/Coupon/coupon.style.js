import styled from "styled-components";

const CouponStyle = styled.div`
  background-image: url("/images/bgKupon.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      color: #ffffff;
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
  .btn {
    padding: 14px 50px;
    font-size: 16px;
    text-align: center;
    background: #0cb47f;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
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
`;
export default CouponStyle;
