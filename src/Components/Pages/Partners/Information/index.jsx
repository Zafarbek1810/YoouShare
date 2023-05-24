import React from "react";
import InformationWrapper from "./Information.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";


const Information = () => {

  const { t } = useTranslation();

  const dataBig = [
    {
      title: "information.info1",
      value: "400 х 190 х 190 information.info6",
    },
    {
      title: "information.info2",
      value: "100 information.info7",
    },
    {
      title: "information.info3",
      value: "36 information.info8",
    },
    {
      title: "information.info4",
      value: "200-220 information.info9",
    },
    {
      title: "information.info5",
      value: "1,5 information.info10",
    },
  ];
  
  const dataMiddle = [
        {
          title: "information.info1",
          value: "400 х 190 х 190 information.info6",
        },
        {
          title: "information.info2",
          value: "5 information.info7",
        },
        {
          title: "information.info3",
          value: "12 information.info8",
        },
        {
          title: "information.info4",
          value: "200-220 information.info9",
        },
        {
          title: "information.info5",
          value: "0,8 information.info10",
        },
  ];
  
  const dataMini = [
      {
          title: "information.info1",
          value: "400 х 190 х 190 information.info6",
        },
        {
          title: "information.info2",
          value: "5 information.info7",
        },
        {
          title: "information.info3",
          value: "6 information.info8",
        },
        {
          title: "information.info4",
          value: "200-220 information.info9",
        },
        {
          title: "information.info5",
          value: "0,6 information.info10",
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
                    <img src="/images/information.png" alt="" />
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
              <h4>information.station2</h4>
              <table>
                <tbody>
                  {dataMiddle.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="right" data-aos={"fade-left"}>
            <div className="img">
                    <img src="/images/information2.png" alt="" />
                </div>
            </div>
          </div>
          <div className="box">
            <div className="left" data-aos={"fade-right"}>
            <div className="img">
                    <img src="/images/information3.png" alt="" />
                </div>
            </div>
            <div className="right" data-aos={"fade-left"}>
              <h4>information.station3</h4>
              <table>
                <tbody>
                  {dataMini.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.value}</td>
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
