import styled from "styled-components";

const InviteWrapper = styled.div`
background: #FAFAFA!important;
  padding: 100px 0;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        img{
          width: 100px;
          margin: auto;
          margin-top:30px;
        }
      .title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: #001002;
        margin-bottom: 20px;
      }
      .text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #001002;
        margin-bottom: 40px;
      }
      a {
        margin: auto;
        border: none;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #ffffff;
        background: #0cb47f;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
          0px 2px 4px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        width: 80%;
        padding: 15px;

        &:hover {
            cursor: pointer;
            background: rgb(12, 180, 127, 0.8);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
              0px 2px 4px rgba(0, 0, 0, 0.12);
            color: #ffffff;
            transition: 0.3s ease-in-out all;
          }
      }
    }

    .right {
      width: 50%;

      .img {
        width: 80%;
        height: 100%;
        margin-left: auto;

        img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }
      }
    }
  }


  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;

    .wrap {
      flex-direction: column;

      .left {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
        .title {
          font-size: 24px;
          line-height: 34px;
        }
        .text {
          font-size: 18px;

        }

        button {
          width: 80%;
        }
      }

      .right {
        width: 100%;
        margin-bottom: 20px;
        .img {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

  }
  
`;

export default InviteWrapper;
