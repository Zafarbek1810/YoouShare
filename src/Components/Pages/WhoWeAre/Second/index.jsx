import React from "react";
import SecondStyle from "./Second.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";

const Second = () => {

  const { t } = useTranslation();

  const data = [
    {
      title: "whoWe.box1",
      price: "10 000",
    },
    {
      title: "whoWe.box2",
      price: "90",
    },
    {
      title: "whoWe.box3",
      price: "30",
    },
  ];

  return (
    <SecondStyle>
      <Container>
        <div className="cards">
          {data.map((item, index) => (
            <div className="card" key={index} data-aos={"fade-up"}>
              <h4 className="card__title">{t(item.title)}</h4>
              <div className="card__price">
                <span className="card__price__number">{t(item.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SecondStyle>
  );
};

export default Second;
