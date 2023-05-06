import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  /* padding-top: 200px; */
`;

const Nav = styled.nav`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #f1f1f1;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  /* position: fixed !important; */
  background-color: #fff !important;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 150px;
      /* margin-right: 250px; */
      img{
        max-width: 100%;
      }
    }
    @media (max-width: 470px) {
      .logo{
        margin-right: 0;
        margin-top: 5px;
      }
    }
  }

  

`;

export {HeaderWrapper, Nav};
