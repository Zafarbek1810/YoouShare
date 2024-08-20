import React, { useContext } from "react";
import YoouShareWrapper from "./YoouShare.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import DataContext from "../../../../Context/DataContext/DataContext";

const YoouShare = () => {

  const backData = useContext(DataContext);
  const { t } = useTranslation();

  const data = [
    {
      title: backData.yoouShare.box1,
      img: "/images/card1.png",
      num: backData.yoouShare.noDeposit,
      currency: backData.yoouShare.depositCurrency,
    },
    {
      title: backData.yoouShare.box2,
      img: "/images/card2.png",
      num: backData.yoouShare.days,
      currency: "",
    },
    {
      title: backData.yoouShare.box3,
      img: "/images/card3.png",
      num: backData.yoouShare.numberOfstations,
      currency: "",
    },
    {
      title: backData.yoouShare.box4,
      img: "/images/card4.png",
      num: backData.yoouShare.technicalSupport,
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
                <img src={item.img} alt="Yoou Power information icons" />
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
