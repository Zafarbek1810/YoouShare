import styled from "styled-components";

const RightNavWrapper = styled.div`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  ul {
    width: 100%;
    display: flex;
    margin-left: 30px;
    justify-content: space-between;
    align-items: center;
    li {
      .link {
        padding: 10px 20px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: #0cb47f;
        flex: none;
        order: 0;
        flex-grow: 0;

        &:hover {
          padding: 10px 20px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #0cb47f;
          flex: none;
          order: 0;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          gap: 10px;
          background: rgba(12, 180, 127, 0.06);
          border-radius: 8px;
          flex: none;
          order: 0;
          flex-grow: 0;
        }
      }

      .active {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        gap: 10px;
        background: rgba(12, 180, 127, 0.06);
        border-radius: 8px;
        flex: none;
        order: 0;
        flex-grow: 0;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #0cb47f;
        flex: none;
        order: 0;
      }
    }
  }

  .lang {
    
    .ant-select-item-option-content {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #001002;
      display: flex !important;
      align-items: center !important;
      
    }
    .ant-select-selection-item {
      display: flex;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #001002;
    }

    img {
      margin-right: 10px !important;
      width: 30px;
      height: 30px;
    }
  }

  .btn {
    cursor: pointer;
    font-weight: 500;
    color: #fff;
    background-color: rgb(4, 51, 83);
    padding: 10px 10px;
    font-size: 15px;
    border-radius: 1px;
    border: none;
    transition: 300ms;

    &:hover {
      background-color: rgb(4, 10, 45);
    }
  }
  
  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    justify-content: start;

    svg {
      path {
        fill: #fff !important;
      }
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      li {
        color: #fff !important;
        height: 20px;
        margin-bottom: 20px;

        .link {
          color: #fff !important;
          font-size: 16px !important;
          font-weight: 600;
          padding-top: 0 !important;
        }

        .active {
          font-size: 16px !important;
          background-color: transparent;
          padding-top: 0;
        }

        .lang {
          .ant-select-selection-item {
            display: flex;
            align-items: center;
            color: #fff;
          }
        }
      }
    }

    .btn {
      width: 90%;
      margin-left: 10px;
    }
  }
`;

export { RightNavWrapper };
