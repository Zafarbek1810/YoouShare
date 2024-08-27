import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import DataContext from "../../../../src/Context/DataContext/DataContext";
import YoouShareWrapper from "../../../../src/Components/Pages/HomePage/YoouShare/YoouShare.style";
import Container from "../../../../src/Components/Common/Container";
import { Button, Input } from "antd";

const YoouShareDashboard = () => {
  const mockData = useContext(DataContext);
  const [backData, setBackData] = useState(mockData['ru'])
  const { t } = useTranslation();

  const initialData = [
    {
      title: backData.yoouShare.box1,
      img: "/images/card1.png",
      num: backData.yoouShare.noDeposit,
      currency: backData.yoouShare.depositCurrency,
    },
    {
      title: backData.yoouShare.box2,
      img: "/images/card2.png",
      num: backData.yoouShare.days,
    },
    {
      title: backData.yoouShare.box3,
      img: "/images/card3.png",
      num: backData.yoouShare.numberOfstations,
    },
    {
      title: backData.yoouShare.box4,
      img: "/images/card4.png",
      num: backData.yoouShare.technicalSupport,
    },
  ];

  const [yoouShareForm, setYoouShareForm] = useState(initialData);

  const handleTitleChange = (e, index) => {
    const newTitle = e.target.value;
    setYoouShareForm((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, title: newTitle } : item
      )
    );
  };

  const handleNumChange = (e, index) => {
    const newNum = e.target.value;
    setYoouShareForm((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, num: newNum } : item
      )
    );
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setYoouShareForm((prevState) =>
      prevState.map((item, i) =>
        i === 0 ? { ...item, currency: newCurrency } : item
      )
    );
  };

  const onSubmit = () => {
    console.log(yoouShareForm);
  }

  return (
    <div className="yoouShareWrapper">
      <div className="btnsWrapper">
        <Button style={{marginRight: '10px'}}>Uz</Button>
        <Button onClick={onSubmit}>Save</Button>
      </div>
      <YoouShareWrapper>
        <Container>
          <h3 data-aos={"fade-up"}>{t("yoouShare.title")}</h3>
          <p className="sub" data-aos={"fade-up"}>
            {t("yoouShare.title2")}
          </p>
          <div className="cards">
            {yoouShareForm.map((item, index) => (
              <div key={index} className="card" data-aos={"fade-up"}>
                <textarea
                  style={{
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    textAlign: "center",
                    width: "100%",
                    resize: "none",
                    marginBottom: "20px",
                    backgroundColor: "transparent",
                    color: "black",
                  }}
                  value={item.title}
                  onChange={(e) => handleTitleChange(e, index)}
                />
                {/* <h6 className="title">{item.title}</h6> */}
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    style={{ maxWidth: "150px", marginBottom: "20px" }}
                    alt="Yoou Power information icons"
                  />
                  <p className="num" style={{ display: "flex" }}>
                    <Input
                      style={{
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "30px",
                        textAlign: "center",
                      }}
                      value={item.num}
                      onChange={(e) => handleNumChange(e, index)}
                    />
                    {item.currency && (
                      <Input
                        style={{
                          border: "none",
                          fontWeight: "bold",
                          fontSize: "16px",
                          textAlign: "center",
                          textTransform: "uppercase",
                        }}
                        value={item.currency}
                        onChange={(e) => handleCurrencyChange(e)}
                      />
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </YoouShareWrapper>
    </div>
  );
};

export default YoouShareDashboard;
