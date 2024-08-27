import React, { useContext, useState } from "react";
import InvestWrapper from "../Invest/Invest.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import DataContext from "../../../../Context/DataContext/DataContext";
import DashboardBtns from "../../../Common/DashboardBtns";

const PurchaseByInstallments = ({ isEditBtn = false }) => {
  const mockData = useContext(DataContext);
  const [yoouShareForm, setYoouShareForm] = useState(mockData["ru"]);
  const [isDashboard, setIsDashboard] = useState(false);
  const [language, setLanguage] = useState("ru");
  const { t } = useTranslation();

  const backData = mockData[language].purchaseByInstallments;

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
      <InvestWrapper style={{ marginTop: "50px" }}>
        <Container>
          <h3 className="title" data-aos={"fade-up"}>
            {t("purchaseByInstallments.title")}
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
                  <h4 className="card__title">{t(item.title)}</h4>
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
                  <div className="card__text">{t(item.text)}</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </InvestWrapper>
    </div>
  );
};

export default PurchaseByInstallments;
