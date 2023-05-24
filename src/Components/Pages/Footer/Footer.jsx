import React from "react";
import FooterWrapper from "./Footer.style";
import { useTranslation } from "react-i18next";
import Container from "../../Common/Container";
import FooterLogo from "../../Common/Svgs/FooterLogo";
import AppleSvg from "../../Common/Svgs/AppleSvg";
import PlayMarketLogo from "../../Common/Svgs/PlayMarketLogo";
import MailSvg from "../../Common/Svgs/MailSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";
import TelSvg from "../../Common/Svgs/TelSvg";
import MyLink from "../../Common/MyLink";


const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <FooterWrapper>
      <Container>
        <div className="wrap">
          <div className="col-1" data-aos={"fade-right"}>
            <div className="logo">
              <FooterLogo />
            </div>
            <p>
              {t("footer.title")}
            </p>
          </div>
          <div className="col-2" data-aos={"fade-up"}>
            <h5 className="title">{t("footer.download")}</h5>
            <div className="app">
              <a href="#">
                <AppleSvg />
              </a>
              <a href="#">
                <PlayMarketLogo />
              </a>
            </div>
          </div>
          <div className="col-3" data-aos={"fade-left"}>
            <h5 className="title">{t("footer.contact")}</h5>
            <div className="contact">
              <a href="tel:+998991970404">
                <TelSvg /> +998 99 197 04 04
              </a>
              <br />
              <a href="mailto:info@yoou.uz">
                <MailSvg /> info@yoou.uz
              </a>
              <br />
              <a href="https://t.me/yoousharebot" target="blank">
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
          <div className="center">
            <p>{t("footer.made")} <MyLink target="_blank" to="https://everbestlab.com/">EverbestLab</MyLink></p>
          </div>
          <div className="right" >
            <a href="#">{t("footer.politika")}</a> | {" "}
            <a href="#">{t("footer.public")}</a>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
