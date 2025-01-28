import React from "react";
import InvestWrapper from "../Invest/Invest.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";

const StandartFranchize = () => {

    const { t } = useTranslation();

    const data = [
        {
            title: "standartFranshiza.box1",
            text: "standartFranshiza.box1p",
        },
        {
            title: "standartFranshiza.box2",
            text: "standartFranshiza.box2p",
        },
        {
            title: "standartFranshiza.box3",
            text: "standartFranshiza.box3p",
        },
    ];

    return (
        <InvestWrapper id="standart-franchize" style={{marginTop: "50px"}}>
            <Container>
                <h3 className="title" data-aos={"fade-up"}>{t("standartFranshiza.title")}</h3>
                <div className="cards">
                    {data.map((item, index) => (
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
