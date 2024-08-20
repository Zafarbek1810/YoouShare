import React, { useContext } from "react";
import InvestWrapper from "../Invest/Invest.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import DataContext from "../../../../Context/DataContext/DataContext";

const StandartFranchize = () => {

    const backData = useContext(DataContext);
    const { t } = useTranslation();

    return (
        <InvestWrapper id="standart-franchize" style={{marginTop: "50px"}}>
            <Container>
                <h3 className="title" data-aos={"fade-up"}>{t("standartFranshiza.title")}</h3>
                <div className="cards">
                    {backData.standartFranshiza.map((item, index) => (
                        <div className="card" key={index} data-aos={"fade-up"}>
                            <div className="card__title">{t(item.title)}</div>
                            <div className="card__text">{t(item.text)}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </InvestWrapper>
    );
};

export default StandartFranchize;
