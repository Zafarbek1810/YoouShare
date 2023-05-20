import React from "react";
import BannerWrapper from "./Banner.style";
import QrCodeSvg from "../../../Common/Svgs/QrCodeSvg";
import Container from "../../../Common/Container";
const Banner = () => {
  return (
    <BannerWrapper>
      <div className="wrap">
        <div className="top" >
          <h3 className="title" data-aos={"fade-up"}>Зарабатывай вместе с нами!</h3>
          <img src="/images/charge.jpg" alt="" data-aos={"fade-up"} />
          <div className="qr" data-aos={"fade-right"}>
            <QrCodeSvg />
          </div>
        </div>
        <div className="bottom">
          <Container>
            <div className="wrap">
              <div className="left" data-aos={"fade-right"}>
                <h3 className="title">Выгода заведения</h3>
                <ul>
                  <li><img src="/images/partner1.png" alt="" /> Реклама заведения</li>
                  <li><img src="/images/partner2.png" alt="" /> Создадим комфорт</li>
                  <li><img src="/images/partner3.png" alt="" /> Больше заряда больше клиентa</li>
                  <li><img src="/images/partner4.png" alt="" /> Дополнительный поток клиентов</li>
                </ul>
              </div>
              <div className="right" data-aos={"fade-left"}>
                <h3 className="title">Условия</h3>
                <ul>
                  <li><span>B2C</span>Мы поставим станцию бесплатно клиент оплачивает за пользование сам.</li>
                  <li><span>B2B</span>Вы оплачиваете аренду станции, клиент получит бесплатный заряд.</li>
                </ul>
              </div>
            </div>
            <div className="btn" data-aos={"zoom-in"}>
                <button>Оставить заявку</button>
            </div>
          </Container>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
