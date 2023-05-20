import React from "react";
import { PowerBankWrapper } from "./PowerBank.style";
import Container from "../../../Common/Container";

const PowerBank = () => {
  return (
    <PowerBankWrapper>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <img src="/images/powerbank.png" alt="" />
          </div>
          <div className="right" data-aos={"fade-left"}>
            <h3 className="title">
              Power Bank <span>Yoou Share</span>
            </h3>
            <p className="descr">
              Подходит для всех современных мобильных устройств. Ёмкости
              аккумулятора хватает на полную зарядку двух телефонов.
            </p>
            <div className="list">
              <h6>Кабели в комплекте</h6>
              <ul>
                <li>Micro USB</li>
                <li>Type-C</li>
                <li>Lightning на iPhone</li>
              </ul>
            </div>
            <div className="yomkost">
              <h6>5 000 mAh емкость </h6>
              <p>Достаточно для зарядки iPhone 14 pro х 1,5 раза</p>
            </div>
            <div className="zaryad">
              <h6>2 А зарядки:</h6>
              <p>Около 1% в минуту в зарядке.</p>
            </div>
          </div>
        </div>
      </Container>
    </PowerBankWrapper>
  );
};

export default PowerBank;
