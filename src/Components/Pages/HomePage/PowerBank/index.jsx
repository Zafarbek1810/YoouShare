import React from "react";
import { PowerBankWrapper } from "./PowerBank.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";

const PowerBank = () => {

  const { t } = useTranslation();

  return (
    <PowerBankWrapper>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <img src="/images/powerbank.png" alt="Yoou Power's powerbank image" />
          </div>
          <div className="right" data-aos={"fade-left"}>
            <h3 className="title">
              Power Bank <span>Yoou Power</span>
            </h3>
            <p className="descr">
              {t("powerBank.paragr")}
            </p>
            <div className="list">
              <h6>{t("powerBank.list-title")}</h6>
              <ul>
                <li>{t("powerBank.li1")}</li>
                <li>{t("powerBank.li2")}</li>
                <li>{t("powerBank.li3")}</li>
              </ul>
            </div>
            <div className="yomkost">
              <h6>{t("powerBank.yomkost-h6")}</h6>
              <p>{t("powerBank.yomkost-p")}</p>
            </div>
            <div className="zaryad">
              <h6>{t("powerBank.zaryad-h6")}</h6>
              <p>{t("powerBank.zaryad-p")}</p>
            </div>
          </div>
        </div>
      </Container>
    </PowerBankWrapper>
  );
};

export default PowerBank;
