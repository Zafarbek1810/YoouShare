import styled from "styled-components";

const ModalStyle = styled.div`
  display: flex;
  width: 100%;

  .box {
    width: 270px;
    height: 400px;
  }
  .top {
    background: linear-gradient(45deg, #0cb47f 0%, #01e140 100%);
    height: 75px;
    border-radius: 20px 20px 0 0;
    position: relative;
    button {
      border: none;
      background: none;
      font-size: 20px;
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 12px;
    }
  }
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(40%);
    img {
      width: 85px;
    }
  }
  .bottom {
    background-color: #fff;
    height: 290px;
    color: #000;
    text-align: center;
    border-radius: 0 0 20px 20px;
    padding: 0 20px 20px;
    .title {
      padding-top: 66px;
    }
    .desc {
      padding-top: 10px;
      font-size: 14px;
    }
    .number {
      padding-top: 15px;
      font-size: 45px;
      font-weight: 600;
    }
  }
`;
export default ModalStyle;
