import React, { useContext, useState } from "react";
import TarifWRapper from "./Tarif.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";
import DataContext from "../../../../Context/DataContext/DataContext";
import DashboardBtns from "../../../Common/DashboardBtns";
import { Input } from "antd";

const Tarif = ({ isEditBtn = false }) => {
  const mockData = useContext(DataContext);
  const [yoouShareForm, setYoouShareForm] = useState(mockData["ru"]);
  const [isDashboard, setIsDashboard] = useState(false);
  const [language, setLanguage] = useState("ru");
  const { t } = useTranslation();

  const backData = mockData[language].tarif;

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
      <TarifWRapper id="tarif">
        <Container>
          <h3 className="title" data-aos={"fade-up"}>
            {t("tarif.title")}
          </h3>
          <div className="cards">
            {(isDashboard ? yoouShareForm : backData).map(
              (item, index) => (
                <div className="card" key={index} data-aos={"fade-up"}>
                  {isDashboard ? (
                    <Input
                      style={{
                        borderRadius: "5px",
                        fontWeight: "600",
                        fontSize: "20px",
                        textAlign: "center",
                        fontFamily: "inter",
                        width: "100%",
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
                    <h4 className="card__title">{t(item.title)}</h4>
                  )}
                  <div className="card__price">
                    <span className="card__price__number">
                      {isDashboard ? (
                        <Input
                          style={{
                            fontWeight: "bold",
                            fontSize: "35px",
                            textAlign: "center",
                            fontFamily: "inter",
                            backgroundColor: "transparent",
                            outlineColor: "white",
                            color: "white",
                            marginBottom: "10px",
                          }}
                          value={item.price}
                          onChange={(e) =>
                            handleChange(index, "price", e.target.value)
                          }
                        />
                      ) : (
                        item.price
                      )}
                    </span>
                    <span className="card__price__currency">
                    {isDashboard ? (
                        <Input
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            textAlign: "center",
                            backgroundColor: "transparent",
                            fontFamily: "inter",
                            color: "white",
                          }}
                          value={item.currency}
                          onChange={(e) =>
                            handleChange(index, "currency", e.target.value)
                          }
                        />
                      ) : (
                        item.currency
                      )}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </TarifWRapper>
    </div>
  );
};

export default Tarif;
