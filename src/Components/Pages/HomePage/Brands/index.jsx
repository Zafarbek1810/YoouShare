import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrandsWrapper } from "./Brands.style";
import Container from "../../../Common/Container";

const dataImg = [
  {
    img: "/brands/1.png",
    alt: "1. Logo brands of our partners",
  },
  {
    img: "/brands/2.png",
    alt: "2. Logo brands of our partners",
  },
  {
    img: "/brands/3.jpg",
    alt: "3. Logo brands of our partners",
  },
  {
    img: "/brands/4.jpg",
    alt: "4. Logo brands of our partners",
  },
  {
    img: "/brands/5.png",
    alt: "5. Logo brands of our partners",
  },
  {
    img: "/brands/6.png",
    alt: "6. Logo brands of our partners",
  },
  {
    img: "/brands/7.jpg",
    alt: "7. Logo brands of our partners",
  },
  {
    img: "/brands/8.png",

    alt: "8. Logo brands of our partners",
  },
  {
    img: "/brands/9.jpg",
    alt: "9. Logo brands of our partners",
  },
  {
    img: "/brands/10.png",
    alt: "10. Logo brands of our partners",
  },
  {
    img: "/brands/11.jpg",
    alt: "11. Logo brands of our partners",
  },
  {
    img: "/brands/12.png",
    alt: "12. Logo brands of our partners",
  },
];

const dataImg2 = [
  {
    img: "/brands/13.png",
    alt: "13. Logo brands of our partners",
  },
  {
    img: "/brands/14.jpg",
    alt: "14. Logo brands of our partners",
  },
  {
    img: "/brands/15.jpg",
    alt: "15. Logo brands of our partners",
  },
  {
    img: "/brands/16.jpg",
    alt: "16. Logo brands of our partners",
  },
  {
    img: "/brands/17.jpg",

    alt: "17. Logo brands of our partners",
  },
  {
    img: "/brands/18.jpg",
    alt: "18. Logo brands of our partners",
  },
  {
    img: "/brands/19.jpg",
    alt: "19. Logo brands of our partners",
  },
  {
    img: "/brands/20.svg",
    alt: "20. Logo brands of our partners",
  },
  {
    img: "/brands/21.png",
    alt: "21. Logo brands of our partners",
  },
  {
    img: "/brands/22.jpg",
    alt: "22. Logo brands of our partners",
  },
  {
    img: "/brands/23.jpg",
    alt: "23. Logo brands of our partners",
  },
  {
    img: "/brands/24.png",
    alt: "24. Logo brands of our partners",
  },
  {
    img: "/brands/25.png",
    alt: "25. Logo brands of our partners",
  },
  {
    img: "/brands/26.jpg",
    alt: "26. Logo brands of our partners",
  },
  {
    img: "/brands/27.jpg",
    alt: "27. Logo brands of our partners",
  },
  {
    img: "/brands/28.jpg",
    alt: "28. Logo brands of our partners",
  },
  {
    img: "/brands/29.jpg",
    alt: "29. Logo brands of our partners",
  },
  {
    img: "/brands/30.jpg",
    alt: "30. Logo brands of our partners",
  },
  {
    img: "/brands/31.png",
    alt: "31. Logo brands of our partners",
  },

  {
    img: "/brands/32.jpg",
    alt: "32. Logo brands of our partners",
  },
  {
    img: "/brands/33.jpg",
    alt: "33. Logo brands of our partners",
  },
  {
    img: "/brands/34.jpg",
    alt: "34. Logo brands of our partners",
  },
  {
    img: "/brands/35.jpg",
    alt: "35. Logo brands of our partners",
  },
  {
    img: "/brands/36.png",
    alt: "36. Logo brands of our partners",
  },
  {
    img: "/brands/37.jpg",
    alt: "37. Logo brands of our partners",
  },
  {
    img: "/brands/38.jpg",
    alt: "38. Logo brands of our partners",
  },
  {
    img: "/brands/39.jpg",
    alt: "39. Logo brands of our partners",
  },
  {
    img: "/brands/40.png",
    alt: "40. Logo brands of our partners",
  },
  {
    img: "/brands/41.jpg",
    alt: "41. Logo brands of our partners",
  },
  {
    img: "/brands/42.jpg",
    alt: "42. Logo brands of our partners",
  },
  {
    img: "/brands/43.jpg",
    alt: "43. Logo brands of our partners",
  },
  {
    img: "/brands/44.jpg",
    alt: "44. Logo brands of our partners",
  },
  {
    img: "/brands/45.jpg",
    alt: "45. Logo brands of our partners",
  },
  {
    img: "/brands/46.jpg",
    alt: "46. Logo brands of our partners",
  },
  {
    img: "/brands/47.jpg",
    alt: "47. Logo brands of our partners",
  },
  {
    img: "/brands/48.jpg",
    alt: "48. Logo brands of our partners",
  },
  {
    img: "/brands/49.jpg",
    alt: "49. Logo brands of our partners",
  },
  {
    img: "/brands/50.jpg",
    alt: "50. Logo brands of our partners",
  },
  {
    img: "/brands/51.jpg",
    alt: "51. Logo brands of our partners",
  },
  {
    img: "/brands/52.jpg",
    alt: "52. Logo brands of our partners",
  },
  {
    img: "/brands/53.jpg",
    alt: "53. Logo brands of our partners",
  },
  {
    img: "/brands/54.jpg",
    alt: "54. Logo brands of our partners",
  },
  {
    img: "/brands/55.jpg",
    alt: "55. Logo brands of our partners",
  },
  {
    img: "/brands/56.jpg",
    alt: "56. Logo brands of our partners",
  },
  {
    img: "/brands/57.jpg",

    alt: "57. Logo brands of our partners",
  },
  {
    img: "/brands/58.jpg",
    alt: "58. Logo brands of our partners",
  },
  {
    img: "/brands/59.jpg",
    alt: "59. Logo brands of our partners",
  },
  {
    img: "/brands/60.jpg",
    alt: "60. Logo brands of our partners",
  },
  {
    img: "/brands/61.jpg",
    alt: "61. Logo brands of our partners",
  },

  {
    img: "/brands/62.jpg",
    alt: "62. Logo brands of our partners",
  },
  {
    img: "/brands/63.jpg",
    alt: "63. Logo brands of our partners",
  },
  {
    img: "/brands/64.jpg",
    alt: "64. Logo brands of our partners",
  },
  {
    img: "/brands/65.jpg",
    alt: "65. Logo brands of our partners",
  },
  {
    img: "/brands/66.jpg",
    alt: "66. Logo brands of our partners",
  },
  {
    img: "/brands/67.jpg",
    alt: "67. Logo brands of our partners",
  },
  {
    img: "/brands/68.jpg",
    alt: "68. Logo brands of our partners",
  },
  {
    img: "/brands/69.jpg",
    alt: "69. Logo brands of our partners",
  },
  {
    img: "/brands/70.jpg",
    alt: "70. Logo brands of our partners",
  },
  {
    img: "/brands/71.png",
    alt: "71. Logo brands of our partners",
  },
  {
    img: "/brands/72.jpg",
    alt: "72. Logo brands of our partners",
  },
  {
    img: "/brands/73.jpg",
    alt: "73. Logo brands of our partners",
  },
  {
    img: "/brands/74.jpg",
    alt: "74. Logo brands of our partners",
  },
  {
    img: "/brands/75.jpg",
    alt: "75. Logo brands of our partners",
  },
  {
    img: "/brands/76.jpg",
    alt: "76. Logo brands of our partners",
  },
  {
    img: "/brands/77.jpg",
    alt: "77. Logo brands of our partners",
  },
  {
    img: "/brands/78.jpg",
    alt: "78. Logo brands of our partners",
  },
  {
    img: "/brands/79.jpg",
    alt: "79. Logo brands of our partners",
  },
  {
    img: "/brands/80.jpg",
    alt: "80. Logo brands of our partners",
  },
  {
    img: "/brands/81.jpg",
    alt: "81. Logo brands of our partners",
  },
  {
    img: "/brands/82.jpg",
    alt: "82. Logo brands of our partners",
  },
  {
    img: "/brands/83.jpg",
    alt: "83. Logo brands of our partners",
  },
  {
    img: "/brands/84.jpg",
    alt: "84. Logo brands of our partners",
  },
  {
    img: "/brands/85.jpg",
    alt: "85. Logo brands of our partners",
  },
  {
    img: "/brands/86.jpg",
    alt: "86. Logo brands of our partners",
  },
  {
    img: "/brands/87.jpg",
    alt: "87. Logo brands of our partners",
  },
  {
    img: "/brands/88.jpg",
    alt: "88. Logo brands of our partners",
  },
  {
    img: "/brands/89.jpg",
    alt: "89. Logo brands of our partners",
  },
  {
    img: "/brands/90.jpg",
    alt: "90. Logo brands of our partners",
  }
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
