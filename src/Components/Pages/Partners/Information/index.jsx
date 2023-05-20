import React from "react";
import InformationWrapper from "./Information.style";
import Container from "../../../Common/Container";

const dataBig = [
  {
    title: "Габариты:",
    value: "400 х 190 х 190 (мм)",
  },
  {
    title: "Вес станции:",
    value: "100 кг",
  },
  {
    title: "Кол-во слотов:",
    value: "36 шт",
  },
  {
    title: "Требования к сети:",
    value: "200-220В",
  },
  {
    title: "Потребляемая мощность:",
    value: "1,5 кВт/ч",
  },
];

const dataMiddle = [
    {
        title: "Габариты:",
        value: "400 х 190 х 190 (мм)",
      },
      {
        title: "Вес станции:",
        value: "5 кг",
      },
      {
        title: "Кол-во слотов:",
        value: "12 шт",
      },
      {
        title: "Требования к сети:",
        value: "200-220В",
      },
      {
        title: "Потребляемая мощность:",
        value: "0,8 кВт/ч",
      },
];

const dataMini = [
    {
        title: "Габариты:",
        value: "400 х 190 х 190 (мм)",
      },
      {
        title: "Вес станции:",
        value: "5 кг",
      },
      {
        title: "Кол-во слотов:",
        value: "6 шт",
      },
      {
        title: "Требования к сети:",
        value: "200-220В",
      },
      {
        title: "Потребляемая мощность:",
        value: "0,6 кВт/ч",
      },
];
const Information = () => {
  return (
    <InformationWrapper>
      <Container>
        <h3 className="title">Информация о станция</h3>
        <div className="wrap">
          <div className="box">
            <div className="left" data-aos={"fade-right"}>
                <div className="img">
                    <img src="/images/information.png" alt="" />
                </div>
            </div>
            <div className="right" data-aos={"fade-left"}>
              <h4>Станция “Big”</h4>
              <table>
                <tbody>
                  {dataBig.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="box box2">
            <div className="left" data-aos={"fade-right"}>
              <h4>Станция “Middle”</h4>
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
              <h4>Станция “Mini”</h4>
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
