import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrandsWrapper } from "./Brands.style";
import Container from "../../../Common/Container";
import DataContext from "../../../../Context/DataContext/DataContext";
import { TrashIcon } from "../../../Common/Svgs/TrashIcon";
import { Button } from "antd";

const Brands = ({ isEditBtn = false }) => {
  const backData = useContext(DataContext);
  const [brandsData, setBrandsData] = useState(backData.dataImg);
  const Images = brandsData.slice(0, 12);
  const Images2 = brandsData.slice(12, brandsData.length);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const opened = () => {
    setOpen(true);
  };

  const closed = () => {
    setOpen(false);
  };

  const onDeletePic = (index) => {
    const confirmDelete = window.confirm(t("confirmDelete"));
    confirmDelete &&
      setBrandsData((prev) => prev.filter((pic, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const newPic = { img: e.target.files[0]?.name };
    newPic && setBrandsData((prev) => [newPic, ...prev]);
  };

  const onSubmit = () => {
    console.log({ brandsData });
  };

  console.log(brandsData);

  return (
    <div className="yoouShareWrapper">
      {isEditBtn && (
        <div className="btnsWrapper">
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button
            onClick={() => document.getElementById("fileInput").click()}
            style={{ marginRight: "10px" }}
          >
            Добавить +
          </Button>
          <Button onClick={onSubmit}>Сохранить</Button>
        </div>
      )}
      <BrandsWrapper>
        <Container>
          <h3 className="title" data-aos={"fade-up"}>
            {t("brands.title")}
          </h3>
          <div className="brands" data-aos={"fade-up"}>
            {Images.map((item, index) => (
              <div className={`brands__item ${isEditBtn && "image-container"}`} key={index}>
                <img
                  src={item.img}
                  alt={`${index}. Logo brands of our partners`}
                />
                {isEditBtn && (
                  <button
                    onClick={() => onDeletePic(index)}
                    className="delete-icon"
                  >
                    <TrashIcon />
                  </button>
                )}
              </div>
            ))}
            {open
              ? Images2.map((item, index) => (
                  <div className={`brands__item ${isEditBtn && "image-container"}`} key={index}>
                    <img
                      src={item.img}
                      alt={`${index}. Logo brands of our partners`}
                    />
                    {isEditBtn && (
                      <button
                        onClick={() => onDeletePic(index)}
                        className="delete-icon"
                      >
                        <TrashIcon />
                      </button>
                    )}
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
    </div>
  );
};

export default Brands;
