import React from "react";
import FooterWrapper from "./Footer.style";
import Container from "../../Common/Container";
import FooterLogo from "../../Common/Svgs/FooterLogo";
import AppleSvg from "../../Common/Svgs/AppleSvg";
import PlayMarketLogo from "../../Common/Svgs/PlayMarketLogo";
import MailSvg from "../../Common/Svgs/MailSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";
import TelSvg from "../../Common/Svgs/TelSvg";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="wrap">
          <div className="col-1">
            <div className="logo">
              <FooterLogo />
            </div>
            <p>
              YOOU Share представляет услугу «YOOU Share» - почасовая аренда
              Power Bank в Узбекистане
            </p>
          </div>
          <div className="col-2">
            <h5 className="title">мобильное приложение</h5>
            <div className="app">
              <a href="#">
                <AppleSvg />
              </a>
              <a href="#">
                <PlayMarketLogo />
              </a>
            </div>
          </div>
          <div className="col-3">
            <h5 className="title">Связаться с нами</h5>
            <div className="contact">
              <a href="tel:+998 99 911 0000">
                <TelSvg /> +998 99 911 00000
              </a>
              <br />
              <a href="mailto:info@themind.uz">
                <MailSvg /> info@themind.uz
              </a>
              <br />
              <a href="https://t.me/Yoou_uz_bot" target="blank">
                <TelegramSvg /> @Yoou_uz_bot
              </a>
              <br />
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <div className="copy">
          <div className="left">
            <p>© OOO THE MIND, 2020 - 2023</p>
          </div>
          <div className="right">
            <a href="#">Политика конфиденциальности</a> | {" "}
            <a href="#">Публичная оферта</a>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
