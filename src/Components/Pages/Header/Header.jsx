import React, { useContext, useEffect } from "react";
import { HeaderWrapper } from "./Header.style";
import Burger from "./Burger/Burger";
import { useTranslation } from "react-i18next";
import MyLink from "../../Common/MyLink";
import Container from "../../Common/Container";
import LogoSvg from "../../Common/Svgs/LogoSvg";

const Header = () => {

  return (
    <HeaderWrapper>
        <Container>
          <div className="nav">
            <MyLink className="logo" to="/">
              <LogoSvg />
            </MyLink>
            <Burger />
          </div>
        </Container>
    </HeaderWrapper>
  );
};

export default Header;
