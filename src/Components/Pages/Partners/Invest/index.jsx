import React, { useContext } from "react";
import InvestWrapper from "./Invest.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import DataContext from "../../../../Context/DataContext/DataContext";

const Invest = () => {

  const backData = useContext(DataContext);
  const { t } = useTranslation();

  return (
    <InvestWrapper>
      <Container>
        <h3 className="title" data-aos={"fade-up"}>{t("franshiza.title")}</h3>
        <div className="cards">
          {backData.franshiza.map((item, index) => (
            <div className="card" key={index} data-aos={"fade-up"}>
              <div className="card__title">{t(item.title)}</div>
              <div className="card__text">{t(item.text)}</div>
            </div>
          ))}
        </div>
        <div className="btn" data-aos={"zoom-in"}>
            <MyLink to="https://t.me/yoousharebot" className="mylink">{t("franshiza.btn")}</MyLink>
        </div>
      </Container>
    </InvestWrapper>
  );
};

export default Invest;
