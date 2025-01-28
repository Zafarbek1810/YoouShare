import React, { useContext, useEffect } from "react";
import { HeaderWrapper } from "./Header.style";
import Burger from "./Burger/Burger";
import MyLink from "../../Common/MyLink";
import Container from "../../Common/Container";

const Header = () => {

  return (
    <HeaderWrapper>
        <Container>
          <div className="nav">
            <MyLink className="logo" to="/">
              <img src="/logo.svg" alt="Footer logo" width={132} height={48} />
            </MyLink>
            <Burger />
          </div>
        </Container>
    </HeaderWrapper>
  );
};

export default Header;
