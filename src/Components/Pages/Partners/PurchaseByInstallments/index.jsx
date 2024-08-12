import React from "react";
import InvestWrapper from "../Invest/Invest.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";

const PurchaseByInstallments = () => {

    const { t } = useTranslation();

    const data = [
        {
            title: "purchaseByInstallments.box1",
            text: "purchaseByInstallments.box1p",
        },
        {
            title: "purchaseByInstallments.box2",
            text: "purchaseByInstallments.box2p",
        },
        {
            title: "purchaseByInstallments.box3",
            text: "purchaseByInstallments.box3p",
        },
    ];

    return (
        <InvestWrapper style={{marginTop: "50px"}}>
            <Container>
                <h3 className="title" data-aos={"fade-up"}>{t("purchaseByInstallments.title")}</h3>
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

export default PurchaseByInstallments;
