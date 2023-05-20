import React from "react";
import YoouShareWrapper from "./YoouShare.style";
import Container from "../../../Common/Container";

const data = [
  {
    title: "Нет депозита,Нет предоплаты",
    img: "/images/card1.png",
    num: "0",
    currency: "UZS",
  },
  {
    title: "Максимум срок аренды",
    img: "/images/card2.png",
    num: "3 суток",
    currency: "",
  },
  {
    title: "Cтанций в Ташкенте",
    img: "/images/card3.png",
    num: "400+",
    currency: "",
  },
  {
    title: "Техподдержка пользователей",
    img: "/images/card4.png",
    num: "24/7",
    currency: "",
  },
];

const YoouShare = () => {
  return (
    <YoouShareWrapper>
      <Container>
        <h3 data-aos={"fade-up"}>Yoou Share</h3>
        <p className="sub" data-aos={"fade-up"}>Возможность оставаться на связи 24 часа в сутки!</p>
        <div className="cards">
          {data.map((item, index) => (
            <div key={index} className="card" data-aos={"fade-up"}>
              <h6 className="title">{item.title}</h6>
              <div>
                <img src={item.img} alt="" />
                <p className="num">
                  {item.num}
                  <span> {item.currency}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </YoouShareWrapper>
  );
};

export default YoouShare;
