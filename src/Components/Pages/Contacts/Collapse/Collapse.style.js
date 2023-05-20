import styled from "styled-components";

const CollapseStyle = styled.div`
  padding: 100px 0;
  background: #fafafa !important;
  white-space: pre-wrap;
  .ant-collapse-header {
    position: relative;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #001002;
  }
  .ant-collapse-expand-icon {
    position: absolute;
    right: 0;
  }
  .ant-collapse-item {
    margin-bottom: 10px !important;
    background: #ffffff;
    border-radius: 8px;
  }
  .ant-collapse {
    background: transparent;
  }

  .ant-collapse-content-box {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #001002;
  }

  @media (max-width: 767px) {
    .ant-collapse {
      width: 100% !important;
    }
  }
`;

export default CollapseStyle;
