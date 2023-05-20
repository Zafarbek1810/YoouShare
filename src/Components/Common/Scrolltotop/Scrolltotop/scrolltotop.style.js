import styled from "styled-components";

const ScrollToTopStyle = styled.div`
  position: fixed;
  z-index: 999;
  right: 10px;
  bottom: 15px;

  .flow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #0CB47F;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(2, 25, 48, 0.24), 0px 0px 8px rgba(2, 25, 48, 0.12);
    border-radius: 12px;
  }
  .icon {
    font-size: 16px;
    transition: 0.2s;
    color: #fff;
  }

  @media (max-width: 767px) {
    position: fixed;
  }
  
`;
export { ScrollToTopStyle };
