import React from "react";
import TarifWRapper from "./Tarif.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";

const Tarif = () => {

    const { t } = useTranslation();

    const data=[
        {
            title:"tarif.box1",
            price:"3 000",
            currency:"UZS"
        },
        {
            title:"tarif.box2",
            price:"10 000",
            currency:"UZS"
        },
        {
            title:"tarif.box3",
            price:"30 000",
            currency:"UZS"
        },
        {
            title:"tarif.box4",
            price:"180 000",
            currency:"UZS"
        },
    
    ]
  return (
    <TarifWRapper id="tarif">
      <Container>
        <h3 className="title" data-aos={"fade-up"}>{t("tarif.title")}</h3>
        <div className="cards">
            {data.map((item,index)=>(
                <div className="card" key={index} data-aos={"fade-up"}> 
                    <h4 className="card__title">{t(item.title)}</h4>
                    <div className="card__price">
                        <span className="card__price__number">{t(item.price)}</span>
                        <span className="card__price__currency">{t(item.currency)}</span>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </TarifWRapper>
  );
};

export default Tarif;
