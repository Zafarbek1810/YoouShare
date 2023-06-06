import React from "react";
import BannerWrapper from "./Banner.style";
import { useTranslation } from "react-i18next";
import QrCodeSvg from "../../../Common/Svgs/QrCodeSvg";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";

const Banner = () => {

  const { t } = useTranslation();

  return (
    <BannerWrapper>
      <div className="wrap">
        <div className="top" >
          <h3 className="title" data-aos={"fade-up"}>{t("partners.title")}</h3>
          <img src="/images/charge.jpg" alt="" data-aos={"fade-up"} />
          <div className="qr" data-aos={"fade-right"}>
            <QrCodeSvg />
          </div>
        </div>
        <div className="bottom">
          <Container>
            <div className="wrap">
              <div className="left" data-aos={"fade-right"}>
                <h3 className="title">{t("partners.left-title")}</h3>
                <ul>
                  <li><img src="/images/partner1.png" alt="" />{t("partners.leftP1")}</li>
                  <li><img src="/images/partner2.png" alt="" />{t("partners.leftP2")}</li>
                  <li><img src="/images/partner3.png" alt="" />{t("partners.leftP3")}</li>
                  <li><img src="/images/partner4.png" alt="" />{t("partners.leftP4")}</li>
                </ul>
              </div>
              <div className="right" data-aos={"fade-left"}>
                <h3 className="title">{t("partners.right-title")}</h3>
                <ul>
                  <li><span>B2C</span>{t("partners.rightP1")}</li>
                  <li><span>B2B</span>{t("partners.rightP2")}</li>
                </ul>
              </div>
            </div>
            <div className="btn" data-aos={"zoom-in"}>
                <MyLink to="https://t.me/yoousharebot" className="mylink">{t("partners.btn")}</MyLink>
            </div>
          </Container>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
