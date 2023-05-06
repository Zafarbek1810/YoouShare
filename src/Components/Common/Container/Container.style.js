import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: ${(props) => (props.width ? `${props.width}px` : "85vw")};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;


  // TABLET
  @media (max-width: 991.98px) {
    max-width: ${(props) => (props.width ? `${props.width}px` : "97vw")};
    }
  
    // MOBILE
    @media (max-width: 767.98px) {
      max-width: ${(props) => (props.width ? `${props.width}px` : "95vw")};
    } 
`;

export { StyledContainer };
