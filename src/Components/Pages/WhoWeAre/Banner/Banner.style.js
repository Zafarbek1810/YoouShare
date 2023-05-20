import styled from "styled-components";

const BannerWrapper = styled.div`
  padding-top: 100px;
  background: #fff;
  .wrap {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    
    .left {
      width: 50%;
    }

    .right {
      width: 50%;
    }
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
      color: #001002;
      margin-bottom: 20px;
    }

    .descr {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #001002;
      span{
        font-weight: 600;
      }
    }

    .img{
        width: 100%;

        img{
            width: 100%;
            border-radius: 12px;
        }
    }
  }

  //make responsive
  @media (max-width: 768px) {

    

    .wrap {
      flex-direction: column;
      gap: 20px;

      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }

      .title {
        font-size: 24px;
        line-height: 32px;
      }

      .descr {
        font-size: 16px;
        line-height: 22px;
      }
      

      .img{
        width: 100%;

        img{
          width: 100%;
        }
      }


    }
    .wrap2{
      flex-direction: column-reverse;
    }
  }

`;

export default BannerWrapper;
