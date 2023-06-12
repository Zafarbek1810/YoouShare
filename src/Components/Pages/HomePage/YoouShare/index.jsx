import React from "react";
import YoouShareWrapper from "./YoouShare.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";

const YoouShare = () => {

  const { t } = useTranslation();

  const data = [
    {
      title: "yoouShare.box1",
      img: "/images/card1.png",
      num: "0",
      currency: "UZS",
    },
    {
      title: "yoouShare.box2",
      img: "/images/card2.png",
      num: "yoouShare.days",
      currency: "",
    },
    {
      title: "yoouShare.box3",
      img: "/images/card3.png",
      num: "300+",
      currency: "",
    },
    {
      title: "yoouShare.box4",
      img: "/images/card4.png",
      num: "24/7",
      currency: "",
    },
  ];

  return (
    <YoouShareWrapper>
      <Container>
        <h3 data-aos={"fade-up"}>{t("yoouShare.title")}</h3>
        <p className="sub" data-aos={"fade-up"}>{t("yoouShare.title2")}</p>
        <div className="cards">
          {data.map((item, index) => (
            <div key={index} className="card" data-aos={"fade-up"}>
              <h6 className="title">{t(item.title)}</h6>
              <div>
                <img src={item.img} alt="Yoou Share information icons" />
                <p className="num">
                  {t(item.num)}
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
