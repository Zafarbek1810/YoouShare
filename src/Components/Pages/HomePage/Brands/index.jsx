import React, { useState } from "react";
import { BrandsWrapper } from "./Brands.style";
import Container from "../../../Common/Container";

const dataImg = [
  {
    img: "/brands/1.png",
    alt: "1",
  },
  {
    img: "/brands/2.png",
    alt: "2",
  },
  {
    img: "/brands/3.png",
    alt: "3",
  },
  {
    img: "/brands/4.png",
    alt: "4",
  },
  {
    img: "/brands/5.png",
    alt: "5",
  },
  {
    img: "/brands/6.png",
    alt: "6",
  },
  {
    img: "/brands/7.png",
    alt: "7",
  },
  {
    img: "/brands/8.png",

    alt: "8",
  },
  {
    img: "/brands/9.png",
    alt: "9",
  },
  {
    img: "/brands/10.png",
    alt: "10",
  },
  {
    img: "/brands/11.png",
    alt: "11",
  },
  {
    img: "/brands/12.png",
    alt: "12",
  },
];

const Brands = () => {
  const [open, setOpen] = useState(false);
  const opened = () => {
      setOpen(true);
  };

  const closed = () => {
      setOpen(false);
  };

  return (
    <BrandsWrapper>
      <Container>
        <h3 className="title">Где нас можно встретить</h3>
        <div className="brands">
          {dataImg.map((item, index) => (
            <div className="brands__item" key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}

          {open
            ? dataImg.map((item, index) => (
                <div className="brands__item" key={index}>
                  <img src={item.img} alt={item.alt} />
                </div>
              ))
            : <></>}
        </div>
        
        <div className="btn">
          {open ? (
            <button className="btn__item" onClick={closed}>
              - Скрыть
            </button>
          ) : (
            <button className="btn__item" onClick={opened}>
              + Увидеть все
            </button>
          )}
        </div>
      </Container>
    </BrandsWrapper>
  );
};

export default Brands;
