import React from "react";
import InformationWrapper from "./Information.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";


const Information = () => {

  const { t } = useTranslation();

  const dataBig = [
    {
      title: "information.info1",
      value: "information.info6.1",
    },
    {
      title: "information.info2",
      value: "information.info7.1",
    },
    {
      title: "information.info3",
      value: "information.info8.1",
    },
    {
      title: "information.info4",
      value: "information.info9.1",
    },
    {
      title: "information.info5",
      value: "information.info10.1",
    },
  ];
  
  const dataMiddle = [
        {
          title: "information.info1",
          value: "information.info6.2",
        },
        {
          title: "information.info2",
          value: "information.info7.2",
        },
        {
          title: "information.info3",
          value: "information.info8.2",
        },
        {
          title: "information.info4",
          value: "information.info9.2",
        },
        {
          title: "information.info5",
          value: "information.info10.2",
        },
  ];
  
  const dataMini = [
      {
          title: "information.info1",
          value: "information.info6.3",
        },
        {
          title: "information.info2",
          value: "information.info7.3",
        },
        {
          title: "information.info3",
          value: "information.info8.3",
        },
        {
          title: "information.info4",
          value: "information.info9.3",
        },
        {
          title: "information.info5",
          value: "information.info10.3",
        },
  ];

  return (
    <InformationWrapper>
      <Container>
        <h3 className="title">{t("information.title")}</h3>
        <div className="wrap">
          <div className="box">
            <div className="left" data-aos={"fade-right"}>
                <div className="img">
                    <img src="/images/information.png" alt="Yoou Power big station image" />
                </div>
            </div>
            <div className="right" data-aos={"fade-left"}>
              <h4>{t("information.station1")}</h4>
              <table>
                <tbody>
                  {dataBig.map((item, index) => (
                    <tr key={index}>
                      <td>{t(item.title)}</td>
                      <td>{t(item.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="box box2">
            <div className="left" data-aos={"fade-right"}>
              <h4>{t("information.station2")}</h4>
              <table>
                <tbody>
                  {dataMiddle.map((item, index) => (
                    <tr key={index}>
                      <td>{t(item.title)}</td>
                      <td>{t(item.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="right" data-aos={"fade-left"}>
            <div className="img">
                    <img src="/images/information2.png" alt="Yoou Power middle station image" />
                </div>
            </div>
          </div>
          <div className="box">
            <div className="left" data-aos={"fade-right"}>
            <div className="img">
                    <img src="/images/information3.png" alt="Yoou Power mini station image" />
                </div>
            </div>
            <div className="right" data-aos={"fade-left"}>
              <h4>{t("information.station3")}</h4>
              <table>
                <tbody>
                  {dataMini.map((item, index) => (
                    <tr key={index}>
                      <td>{t(item.title)}</td>
                      <td>{t(item.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </Container>
    </InformationWrapper>
  );
};

export default Information;
