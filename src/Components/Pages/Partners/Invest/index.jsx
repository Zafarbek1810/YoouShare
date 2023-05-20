import React from "react";
import InvestWrapper from "./Invest.style";
import Container from "../../../Common/Container";

const data = [
  {
    title: "Стандартная франшиза",
    text: "Вклад от 1 500 USD \nПолучи 70% прибыли",
  },
  {
    title: "Эксклюзивная франшиза",
    text: "Вклад от 25 000 USD \nПолучи 70% прибыли",
  },
  {
    title: "Условия инвестиции",
    text: "Вклад от 1 500 USD \nПолучи 50% прибыли",
  },
];

const Invest = () => {
  return (
    <InvestWrapper>
      <Container>
        <h3 className="title" data-aos={"fade-up"}>Франшиза и инвестиции</h3>
        <div className="cards">
          {data.map((item, index) => (
            <div className="card" key={index} data-aos={"fade-up"}>
              <div className="card__title">{item.title}</div>
              <div className="card__text">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="btn" data-aos={"zoom-in"}>
            <button>Оставить заявку</button>
        </div>
      </Container>
    </InvestWrapper>
  );
};

export default Invest;
