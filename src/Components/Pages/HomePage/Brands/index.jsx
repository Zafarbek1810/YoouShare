import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

const dataImg2 = [
  {
    img: "/brands/13.jpg",
    alt: "13",
  },
  {
    img: "/brands/14.png",
    alt: "14",
  },
  {
    img: "/brands/15.png",
    alt: "15",
  },
  {
    img: "/brands/16.svg",
    alt: "16",
  },
  {
    img: "/brands/17.jpg",

    alt: "17",
  },
  {
    img: "/brands/18.jpg",
    alt: "18",
  },
  {
    img: "/brands/19.jpg",
    alt: "19",
  },
  {
    img: "/brands/20.jpg",
    alt: "20",
  },
  {
    img: "/brands/21.png",
    alt: "21",
  },
  {
    img: "/brands/22.jpg",
    alt: "22",
  },
  {
    img: "/brands/23.jpg",
    alt: "23",
  },
  {
    img: "/brands/24.jpg",
    alt: "24",
  },
  {
    img: "/brands/25.jpg",
    alt: "25",
  },
  {
    img: "/brands/26.png",
    alt: "26",
  },
  {
    img: "/brands/27.jpg",
    alt: "27",
  },
  {
    img: "/brands/28.jpg",
    alt: "28",
  },
  {
    img: "/brands/29.jpg",
    alt: "29",
  },
  {
    img: "/brands/30.jpg",
    alt: "30",
  },
  {
    img: "/brands/31.jpg",
    alt: "31",
  },

  {
    img: "/brands/32.jpg",
    alt: "32",
  },
  {
    img: "/brands/33.jpg",
    alt: "33",
  },
  {
    img: "/brands/34.jpg",
    alt: "34",
  },
  {
    img: "/brands/35.jpg",
    alt: "35",
  },
  {
    img: "/brands/36.png",
    alt: "36",
  },
  {
    img: "/brands/37.jpg",
    alt: "37",
  },
  {
    img: "/brands/38.jpg",
    alt: "38",
  },
  {
    img: "/brands/39.png",
    alt: "39",
  },
  {
    img: "/brands/40.jpg",
    alt: "40",
  },
  {
    img: "/brands/41.png",
    alt: "41",
  },
  {
    img: "/brands/42.jpg",
    alt: "42",
  },
  {
    img: "/brands/43.png",
    alt: "43",
  },
  {
    img: "/brands/44.jpg",
    alt: "44",
  },
  {
    img: "/brands/45.jpg",
    alt: "45",
  },
  {
    img: "/brands/46.png",
    alt: "46",
  },
  {
    img: "/brands/47.jpg",
    alt: "47",
  },
  {
    img: "/brands/48.jpg",
    alt: "48",
  },
  {
    img: "/brands/49.jpg",
    alt: "49",
  },
  {
    img: "/brands/50.jpg",
    alt: "50",
  },
  {
    img: "/brands/51.jpg",
    alt: "51",
  },
  {
    img: "/brands/52.jpg",
    alt: "52",
  },
  {
    img: "/brands/53.jpg",
    alt: "53",
  },
  {
    img: "/brands/54.jpg",
    alt: "54",
  },
  {
    img: "/brands/55.jpg",
    alt: "55",
  },
  {
    img: "/brands/56.jpg",
    alt: "56",
  },
  {
    img: "/brands/57.jpg",

    alt: "57",
  },
  {
    img: "/brands/58.jpg",
    alt: "58",
  },
  {
    img: "/brands/59.jpg",
    alt: "59",
  },
  {
    img: "/brands/60.png",
    alt: "60",
  },
  {
    img: "/brands/61.jpg",
    alt: "61",
  },

  {
    img: "/brands/62.jpg",
    alt: "62",
  },
  {
    img: "/brands/63.jpg",
    alt: "63",
  },
  {
    img: "/brands/64.jpg",
    alt: "64",
  },
  {
    img: "/brands/65.jpg",
    alt: "65",
  },
  {
    img: "/brands/66.png",
    alt: "66",
  },
  {
    img: "/brands/67.jpg",
    alt: "67",
  },
  {
    img: "/brands/68.png",
    alt: "68",
  },
  {
    img: "/brands/69.jpg",
    alt: "69",
  },
  {
    img: "/brands/70.jpg",
    alt: "70",
  },
  {
    img: "/brands/71.jpg",
    alt: "71",
  },
  {
    img: "/brands/72.png",
    alt: "72",
  },
  {
    img: "/brands/73.jpg",
    alt: "73",
  },
  {
    img: "/brands/74.jpg",
    alt: "74",
  },
  {
    img: "/brands/75.jpg",
    alt: "75",
  },
  {
    img: "/brands/76.jpg",
    alt: "76",
  },
  {
    img: "/brands/77.jpg",

    alt: "77",
  },
  {
    img: "/brands/78.jpg",
    alt: "78",
  },
  {
    img: "/brands/79.jpg",
    alt: "79",
  },
  {
    img: "/brands/80.jpg",
    alt: "80",
  },
  {
    img: "/brands/81.jpg",
    alt: "81",
  },
  {
    img: "/brands/82.jpg",
    alt: "82",
  },
  {
    img: "/brands/83.jpg",
    alt: "83",
  },
  {
    img: "/brands/84.png",
    alt: "84",
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

  const { t } = useTranslation();

  return (
    <BrandsWrapper>
      <Container>
        <h3 className="title" data-aos={"fade-up"}>
          {t("brands.title")}
        </h3>
        <div className="brands" data-aos={"fade-up"}>
          {dataImg.map((item, index) => (
            <div className="brands__item" key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
          {open
            ? dataImg2.map((item, index) => (
                <div className="brands__item" key={index}>
                  <img src={item.img} alt={item.alt} />
                </div>
              ))
            : null}
        </div>

        <div className="btn">
          {open ? (
            <button className="btn__item" onClick={closed}>
              {t("brands.closed")}
            </button>
          ) : (
            <button className="btn__item" onClick={opened}>
             {t("brands.open")}
            </button>
          )}
        </div>
      </Container>
    </BrandsWrapper>
  );
};

export default Brands;
