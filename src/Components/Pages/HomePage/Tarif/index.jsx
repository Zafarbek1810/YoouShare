import React, { useContext } from "react";
import TarifWRapper from "./Tarif.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import DataContext from "../../../../Context/DataContext/DataContext";

const Tarif = () => {

    const backData = useContext(DataContext);
    const { t } = useTranslation();

  return (
    <TarifWRapper id="tarif">
      <Container>
        <h3 className="title" data-aos={"fade-up"}>{t("tarif.title")}</h3>
        <div className="cards">
            {backData.tarif.map((item,index)=>(
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
