import React, { useContext, useEffect, useState } from "react";
import YoouShareWrapper from "./YoouShare.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import DataContext from "../../../../Context/DataContext/DataContext";
import { Input } from "antd";
import DashboardBtns from "../../../Common/DashboardBtns";

const YoouShare = ({ isEditBtn = false }) => {
  const mockData = useContext(DataContext);
  const [yoouShareForm, setYoouShareForm] = useState([]);
  const [isDashboard, setIsDashboard] = useState(false);
  const [language, setLanguage] = useState("ru");
  const [subTitle, setSubTitle] = useState("Возможность оставаться на связи 24 часа в сутки!")
  const { t } = useTranslation();

  const backData = mockData[language];

  useEffect(() => {
    if(language === "uz"){
      setSubTitle("Kuniga 24 soat aloqada!")
    }
    if(language === "ru"){
      setSubTitle("Возможность оставаться на связи 24 часа в сутки!")
    }
    if(language === "en"){
      setSubTitle("Stay connected 24 hours a day!")
    }
  } ,[language])

  const data = [
    {
      title: isEditBtn ? backData.yoouShare.box1 : t('yoouShare.box1'),
      img: "/images/card1.png",
      num: backData.yoouShare.noDeposit,
      currency: backData.yoouShare.depositCurrency,
    },
    {
      title: isEditBtn ? backData.yoouShare.box2 : t('yoouShare.box2'),
      img: "/images/card2.png",
      num: isEditBtn ? backData.yoouShare.days : t('yoouShare.days'),
      currency: "",
    },
    {
      title: isEditBtn ? backData.yoouShare.box3 : t('yoouShare.box3'),
      img: "/images/card3.png",
      num: backData.yoouShare.numberOfstations,
      currency: "",
    },
    {
      title: isEditBtn ? backData.yoouShare.box4 : t('yoouShare.box4'),
      img: "/images/card4.png",
      num: backData.yoouShare.technicalSupport,
      currency: "",
    },
  ];

  const handleChange = (index, field, value) => {
    setYoouShareForm((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const onEdit = () => {
    setIsDashboard(true);
    setYoouShareForm(data);
  };

  const onSubmit = () => {
    console.log({ yoouShareForm, language });
    setIsDashboard(false);
  };

  return (
    <div className="yoouShareWrapper">
      <DashboardBtns
        isEditBtn={isEditBtn}
        isDashboard={isDashboard}
        languag={language}
        setLanguage={setLanguage}
        onEdit={onEdit}
        setIsDashboard={setIsDashboard}
        onSubmit={onSubmit}
      />
      <YoouShareWrapper>
        <Container>
          <h3 data-aos="fade-up">{t("yoouShare.title")}</h3>
          <p className="sub" data-aos="fade-up">
            {isEditBtn ? subTitle : t("yoouShare.title2")}
          </p>
          <div className="cards">
            {(isDashboard ? yoouShareForm : data).map((item, index) => (
              <div key={index} className="card" data-aos="fade-up">
                {isDashboard ? (
                  <Input
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      textAlign: "center",
                      fontFamily: "inter",
                      width: "100%",
                      resize: "none",
                      marginBottom: "20px",
                      backgroundColor: "transparent",
                      color: "black",
                    }}
                    value={item.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                  />
                ) : (
                  <h6 className="title">{t(item.title)}</h6>
                )}
                <div>
                  <img
                    src={item.img}
                    alt="Yoou Power information icons"
                    style={{ maxWidth: "150px", marginBottom: "20px" }}
                  />
                  <p
                    className="num"
                    style={{ display: isDashboard ? "flex" : "block" }}
                  >
                    {isDashboard ? (
                      <Input
                        style={{
                          fontWeight: "bold",
                          fontSize: "30px",
                          textAlign: "center",
                          fontFamily: "inter",
                        }}
                        value={item.num}
                        onChange={(e) =>
                          handleChange(index, "num", e.target.value)
                        }
                      />
                    ) : index === 0 ? (
                      styleWord(t(item.num))
                    ) : (
                      item.num
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

const styleWord = (text) => {
  const [firstWord, secondWord] = text.split(" ");

  return (
    <span style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}>
      {firstWord} <span>{secondWord}</span>
    </span>
  );
};

export default YoouShare;
