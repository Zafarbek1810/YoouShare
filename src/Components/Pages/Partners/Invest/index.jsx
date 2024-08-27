import React, { useContext, useEffect, useState } from "react";
import InvestWrapper from "./Invest.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import DataContext from "../../../../Context/DataContext/DataContext";
import DashboardBtns from "../../../Common/DashboardBtns";
import { Input } from "antd";

const Invest = ({ isEditBtn = false }) => {
  const mockData = useContext(DataContext);
  const [yoouShareForm, setYoouShareForm] = useState(mockData["ru"]);
  const [isDashboard, setIsDashboard] = useState(false);
  const [language, setLanguage] = useState("ru");
  const [title, setTitle] = useState("Франшиза и инвестиции")
  const { t } = useTranslation();

  const backData = mockData[language].franshiza;

  useEffect(() => {
    if(language === "uz"){
      setTitle("Franchayzing va investitsiyalar")
    }
    if(language === "ru"){
      setTitle("Франшиза и инвестиции")
    }
    if(language === "en"){
      setTitle("Franchise and investments")
    }
  } ,[language])

  const onEdit = () => {
    setIsDashboard(true);
    setYoouShareForm(backData);
  };

  const onSubmit = () => {
    console.log({ yoouShareForm, language });
    setIsDashboard(false);
  };

  const handleChange = (index, field, value) => {
    setYoouShareForm((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
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
      <InvestWrapper>
        <Container>
          <h3 className="title" data-aos={"fade-up"}>
            {isEditBtn ? title : t("franshiza.title")}
          </h3>
          <div className="cards">
            {(isDashboard ? yoouShareForm : backData).map((item, index) => (
              <div className="card" key={index} data-aos={"fade-up"}>
                {isDashboard ? (
                  <textarea
                    style={{
                      borderRadius: "5px",
                      fontWeight: "bold",
                      fontSize: "28px",
                      textAlign: "center",
                      fontFamily: "inter",
                      width: "100%",
                      minHeight: "40px",
                      resize: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      marginBottom: "10px",
                    }}
                    value={item.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                  />
                ) : (
                  <h4 className="card__title">{isEditBtn ? item.title : t(`franshiza.box${index+1}`)}</h4>
                )}
                {isDashboard ? (
                  <textarea
                    style={{
                      borderRadius: "5px",
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "inter",
                      width: "100%",
                      height: "70px",
                      resize: "none",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                    value={item.text}
                    onChange={(e) =>
                      handleChange(index, "text", e.target.value)
                    }
                  />
                ) : (
                  <div className="card__text">{isEditBtn ? item.text : t(`franshiza.box${index+1}p`)}</div>
                )}
              </div>
            ))}
          </div>
          {!isEditBtn && (
            <div className="btn" data-aos={"zoom-in"}>
              <MyLink to="https://t.me/yoousharebot" className="mylink">
                {t("franshiza.btn")}
              </MyLink>
            </div>
          )}
        </Container>
      </InvestWrapper>
    </div>
  );
};

export default Invest;
