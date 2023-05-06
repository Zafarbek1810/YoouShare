import React, { useContext, useEffect } from "react";
import { HeaderWrapper, Nav } from "./Header.style";
import MyLink from "../../Common/MyLink";
import Container from "../../Common/Container";
import LogoSvg from "../../Common/Svgs/LogoSvg";
import Burger from "./Burger/Burger";

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Container>
          <div className="nav">
            <MyLink className="logo" to="/">
              <LogoSvg />
            </MyLink>
            <Burger />
          </div>
        </Container>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
