import React from "react";
import BannerStyle from "./Banner.style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";

const data = [
  {
    img: "/images/contact-icon1.png",
    title: "+998 99 197 0404",
  },
  {
    img: "/images/contact-icon2.png",
    title: "info@themind.uz",
  },
  {
    img: "/images/contact-icon3.png",
    title: "@yoousharebot",
  },
  {
    img: "/images/contact-icon4.png",
    title: "contact.address",
  },
];
const Banner = () => {

  const { t } = useTranslation();

  return (
    <BannerStyle>
      <Container>
        <h3 className="title">{t("contact.title")}</h3>
        <div className="wrap">
          {data.map((v, i) => (
            <div className="item" key={i} data-aos={"fade-up"}>
              <img src={v.img} alt="" />
              <p data-aos={"fade-up"}>{t(v.title)}</p>
            </div>
          ))}
        </div>
      </Container>
    </BannerStyle>
  );
};

export default Banner;
