import styled from "styled-components";

const ModalStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .box {
    width: 270px;
    height: 400px;
  }
  .top {
    background: linear-gradient(45deg, #0cb47f 0%, #01e140 100%);
    height: 75px;
    border-radius: 20px 20px 0 0;
    position: relative;
    a{
        font-size: 20px;
        position: absolute;
        top: 3px;
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
    height: 270px;
    color: #000;
    text-align: center;
    border-radius: 0 0 20px 20px;
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
