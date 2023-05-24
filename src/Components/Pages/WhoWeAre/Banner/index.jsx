import React from "react";
import BannerWrapper from "./Banner.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";

const Banner = () => {

  const { t } = useTranslation();

  return (
    <BannerWrapper>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <div className="img">
              <img src="/images/ktomi.jpg" alt="cat" />
            </div>
          </div>
          <div className="right" data-aos={"fade-left"}>
            <h3 className="title">{t("whoWe.company")}</h3>
            <p className="descr">
              {t("whoWe.company-p")}
            </p>
          </div>
        </div>
        <div className="wrap wrap2">
          <div className="left" data-aos={"fade-right"}>
            <h3 className="title">{t("whoWe.founders")}</h3>
            <p className="descr" dangerouslySetInnerHTML={{__html: t("whoWe.founder1")}}></p>
            <br />
            <p className="descr" dangerouslySetInnerHTML={{__html: t("whoWe.founder2")}}></p>

          </div>
          <div className="right" data-aos={"fade-left"}>
            <div className="img">
              <img src="/images/Screenshot2.png" alt="cat" />
            </div>
          </div>
        </div>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
