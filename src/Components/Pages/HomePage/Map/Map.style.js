import styled from "styled-components";

const MapWrapper = styled.div`
  padding: 100px;
  width: 100%;
  background: #fff;
  
  h3.title {
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #001002;
    margin-bottom: 30px;
  }

  //make responsive
  @media (max-width: 768px) {
    padding: 50px 0;
    h3.title {
      font-size: 30px;
      line-height: 36px;
    }
  }

`;

export { MapWrapper };
