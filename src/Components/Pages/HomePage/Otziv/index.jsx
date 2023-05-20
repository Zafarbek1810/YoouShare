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
import OtzivSvg from "../../../Common/Svgs/OtzivSvg";

const cardData=[
  {
    img:<OtzivSvg/>,
    text:"Nikita Ageev",
    title:"Отлично, что у нас появилась такая система с арендой повербанков. Теперь не нужно всегда таскать зарядку с собой!",
  },
  {
    img:<OtzivSvg/>,
    text:"Mike Ross",
    title:"Работает хорошо без проблем лично я доволен. Хорошая идея.",
  },
  {
    img:<OtzivSvg/>,
    text:"Erkin Norov",
    title:"Отлично всё работает, я доволен сервисом.",
  },
  {
    img:<OtzivSvg/>,
    text:"Shahyora Erkinova",
    title:"Judayam zor zatyadka, prilojeniya orqali qata borligini bilsila boladi. Eng zor tavsiya qilaman",
  },
  {
    img:<OtzivSvg/>,
    text:"Miraziz Kozimov",
    title:"Zor iwlavoti molodest yoou uzb. da nomer1",
  },
  {
    img:<OtzivSvg/>,
    text:"Xikmat Xojixonov",
    title:"YOOU N.1",
  },
  {
    img:<OtzivSvg/>,
    text:"Собитонов АбдулБосит",
    title:"Narmalni narsekan",
  },
]

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
              <div className="card__img">
                {/* <img src={item.img} alt="" /> */}
                {item.img}
              </div>
              <div className="card__content">
                <span className="icon">
                  <img src="/images/Union.png" alt="" />
                </span>
                <p className="card__text">
                  {item.title}
                </p>
                <h4 className="card__title">
                  {item.text} <span>{item.text}</span>
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
