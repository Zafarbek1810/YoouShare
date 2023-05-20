import styled from "styled-components";

const ApplicationStyle = styled.div`
  padding: 100px 0;
  background-color: #fff;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #001002;
    margin-bottom: 30px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 45%;
      form {
        .select {
          padding: 8px 10px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #000017;
          background: rgba(0, 16, 2, 0.05);
          border-radius: 8px;
          border: none;
          margin-bottom: 20px;

          .ant-select-selector {
            background: transparent;
            border: none;
            box-shadow: none !important;
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.02em;
            color: #000017;
          }
        }

        .name,
        .phone,
        .messageInput {
          padding: 14px 16px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #000017;
          background: rgba(0, 16, 2, 0.05);
          border-radius: 8px;
          border: none;
          margin-bottom: 20px;
          &::placeholder {
            color: #9ca99e;
          }
        }

        .label {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #000017;
        }

        button {
          width: 100%;
          padding: 14px 16px;
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
    }

    .right {
      width: 50%;
      .img {
        width: 90%;
        margin-left: auto;

        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 50px 0;

    h2 {
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      color: #001002;
      margin-bottom: 20px;
    }

    .wrap {
      flex-direction: column-reverse;
      .left {
        width: 100%;

        form {
          .select {
            width: 100%;
          }

          .name,
          .phone,
          .messageInput {
            width: 100%;
          }
        }
      }

      .right {
        margin-bottom: 30px;

        width: 100%;
        .img {
          width: 100%;
          margin-left: auto;

          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default ApplicationStyle;
