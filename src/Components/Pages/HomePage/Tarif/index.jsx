import React from "react";
import TarifWRapper from "./Tarif.style";
import Container from "../../../Common/Container";

const data=[
    {
        title:"Стоимость часа аренды",
        price:"3 000",
        currency:"UZS"
    },
    {
        title:"Стоимость день аренды",
        price:"10 000",
        currency:"UZS"
    },
    {
        title:"Стоимость аренды за три дня",
        price:"30 000",
        currency:"UZS"
    },
    {
        title:"За не возврат повербанка",
        price:"150 000",
        currency:"UZS"
    },

]

const Tarif = () => {
  return (
    <TarifWRapper>
      <Container>
        <h3 className="title">Тарифы</h3>
        <div className="cards">
            {data.map((item,index)=>(
                <div className="card" key={index}>
                    <h4 className="card__title">{item.title}</h4>
                    <div className="card__price">
                        <span className="card__price__number">{item.price}</span>
                        <span className="card__price__currency">{item.currency}</span>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </TarifWRapper>
  );
};

export default Tarif;
