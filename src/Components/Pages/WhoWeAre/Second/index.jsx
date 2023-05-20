import React from "react";
import SecondStyle from "./Second.style";
import Container from "../../../Common/Container";

const data = [
  {
    title: "Всего пользователей",
    price: "10 000",
  },
  {
    title: "B2C партнеры",
    price: "90",
  },
  {
    title: "B2B партнеры",
    price: "30",
  },
];

const Second = () => {
  return (
    <SecondStyle>
      <Container>
        <div className="cards">
          {data.map((item, index) => (
            <div className="card" key={index} data-aos={"fade-up"}>
              <h4 className="card__title">{item.title}</h4>
              <div className="card__price">
                <span className="card__price__number">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SecondStyle>
  );
};

export default Second;
