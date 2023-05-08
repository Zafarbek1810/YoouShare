import React, { useEffect, useRef } from "react";
import { OtzivWrapper } from "./Otziv.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../../../Common/Container";
import LeftSvg from "../../../Common/Svgs/LeftSvg";
import RightSvg from "../../../Common/Svgs/RightSvg";

const Otziv = () => {
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
        <h3 className="title">Отзывы</h3>
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
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <button onClick={prevSlider} className="prev">
            <LeftSvg />
          </button>
          <SwiperSlide>
            <div className="card">
              <div className="card__img">
                <img src="/images/otziv_img.png" alt="" />
              </div>
              <div className="card__content">
                <span className="icon">
                  <img src="/images/Union.png" alt="" />
                </span>
                <p className="card__text">
                  Lorem Ipsum has been the industry`s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <h4 className="card__title">
                  Jason Bourne <span>Jason Bourne</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__img">
                <img src="/images/otziv_img.png" alt="" />
              </div>
              <div className="card__content">
                <span className="icon">
                  <img src="/images/Union.png" alt="" />
                </span>
                <p className="card__text">
                  Lorem Ipsum has been the industry`s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <h4 className="card__title">
                  Jason Bourne <span>Jason Bourne</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__img">
                <img src="/images/otziv_img.png" alt="" />
              </div>
              <div className="card__content">
                <span className="icon">
                  <img src="/images/Union.png" alt="" />
                </span>
                <p className="card__text">
                  Lorem Ipsum has been the industry`s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <h4 className="card__title">
                  Jason Bourne <span>Jason Bourne</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card__img">
                <img src="/images/otziv_img.png" alt="" />
              </div>
              <div className="card__content">
                <span className="icon">
                  <img src="/images/Union.png" alt="" />
                </span>
                <p className="card__text">
                  Lorem Ipsum has been the industry`s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <h4 className="card__title">
                  Jason Bourne <span>Jason Bourne</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <button onClick={nextSlider} className="next">
            <RightSvg />
          </button>
        </Swiper>
      </Container>
    </OtzivWrapper>
  );
};

export default Otziv;
