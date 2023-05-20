import React from "react";
import BannerWrapper from "./Banner.style";
import Container from "../../../Common/Container";

const Banner = () => {
  return (
    <BannerWrapper>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <div className="img">
              <img src="/images/ktomi.jpg" alt="cat" />
            </div>
          </div>
          <div className="right" data-aos={"fade-left"}>
            <h3 className="title">О компании</h3>
            <p className="descr">
              Мы – молодая компания, ставшая первым сервисом почасовой аренды
              повербанков (Power Bank) в Узбекистане. Компания основана в 2020
              году, а первый запуск Сервиса был проведен в 2021. За два года мы
              прошли тернистый путь проб и ошибок, который вылился сейчас в
              постоянный поток новых пользователей. Надеемся что и дальше будем
              радовать Вас нашим сервисом
            </p>
          </div>
        </div>
        <div className="wrap wrap2">
          <div className="left" data-aos={"fade-right"}>
            <h3 className="title">О основатели</h3>
            <p className="descr">
              Dilshod Bobomuradov - Соучредитель, генеральный директор, закончил
              <span> Ташкентский Финансовый Институт </span>, 12 лет в производственной сфере.
              <br /> <br />
              Gordy Wu, WU ZHIXIANG - Соучредитель, ангел-инвестор, закончил
              <span> Пекинский Университет, Китай </span>. 10 лет в производственной сфере. 5
              лет в инвестиционной сфере.
            </p>
          </div>
          <div className="right" data-aos={"fade-left"}>
            <div className="img">
              <img src="/images/Screenshot2.png" alt="cat" />
            </div>
          </div>
        </div>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
