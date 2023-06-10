import React, { useEffect, useRef } from "react";
import { OtzivWrapper } from "./Otziv.style";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../../../Common/Container";
import LeftSvg from "../../../Common/Svgs/LeftSvg";
import RightSvg from "../../../Common/Svgs/RightSvg";
import OtzivSvg from "../../../Common/Svgs/OtzivSvg";


const Otziv = () => {

  const { t } = useTranslation();

  const cardData=[
    {
      img:<OtzivSvg/>,
      text:"otziv.user1",
      title:"otziv.userSay1",
    },
    {
      img:<OtzivSvg/>,
      text:"otziv.user2",
      title:"otziv.userSay2",
    },
    {
      img:<OtzivSvg/>,
      text:"otziv.user3",
      title:"otziv.userSay3",
    },
    {
      img:<OtzivSvg/>,
      text:"otziv.user4",
      title:"otziv.userSay4",
    },
    {
      img:<OtzivSvg/>,
      text:"otziv.user5",
      title:"otziv.userSay5",
    },
    {
      img:<OtzivSvg/>,
      text:"otziv.user6",
      title:"otziv.userSay6",
    },
    {
      img:<OtzivSvg/>,
      text:"otziv.user7",
      title:"otziv.userSay7",
    },
  ]

  const swiperRef = useRef(null);
  console.log(swiperRef);

  useEffect(() => {
    console.log(swiperRef.current.swiper);
  }, []);

  const nextSlider = () => {
    swiperRef.current.swiper.slideNext();
  };

  const prevSlider = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <OtzivWrapper>
      <Container>
        <h3 className="title">{t("otziv.title")}</h3>
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={50}
          centeredSlides={true}
          breakpoints={{
            220: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          //   navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
          <button onClick={prevSlider} className="prev">
            <LeftSvg />
          </button>
          {
            cardData.map((item,index)=>(
              <SwiperSlide key={index}>
              <div className="card">
             
              <div className="card__content">
                <span className="icon">
                  <img src="/images/Union.png" alt="Reviews union image" />
                </span>
                <p className="card__text">
                  {t(item.title)}
                </p>
                <h4 className="card__title">
                  {t(item.text)}
                </h4>
              </div>
            </div>
            </SwiperSlide>         
          ))}
          <button onClick={nextSlider} className="next">
            <RightSvg />
          </button>
        </Swiper>
      </Container>
    </OtzivWrapper>
  );
};

export default Otziv;
