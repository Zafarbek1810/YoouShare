import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 333;
  width: 100%;

  width: 100%;
  height: auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  /* position: fixed !important; */
  background-color: none !important;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 150px;

      svg{
        path{
          fill: #03AC79 !important;

        }
        .yashil{
          fill: #00CE8A !important;
        }
      }
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

export {HeaderWrapper};
