import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrandsWrapper } from "./Brands.style";
import Container from "../../../Common/Container";
import DataContext from "../../../../Context/DataContext/DataContext";


const Brands = () => {
  const backData = useContext(DataContext);
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
          {backData.dataImg.map((item, index) => (
            <div className="brands__item" key={index}>
              <img src={item.img} alt={`${index}. Logo brands of our partners`} />
            </div>
          ))}
          {open
            ? backData.dataImg2.map((item, index) => (
                <div className="brands__item" key={index}>
                  <img src={item.img} alt={`${index}. Logo brands of our partners`} />
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
