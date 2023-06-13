import React, { useState } from "react";
import CollapseStyle from "./Collapse.style";
import Container from "../../../Common/Container";
import { useTranslation } from "react-i18next";
import { Collapse } from "antd";
const { Panel } = Collapse;
 



const Collapses = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: "collapse.question1",
      text: "collapse.answer1",
    },
    {
      id: 2,
      title: "collapse.question2",
      text: "collapse.answer2",
    },
    {
      id: 3,
      title: "collapse.question3",
      text: "collapse.answer3",
    },
    {
      id: 4,
      title: "collapse.question4",
      text: "collapse.answer4",
    },
    {
      id: 5,
      title: "collapse.question5",
      text: "collapse.answer5",
    },
    {
      id: 6,
      title: "collapse.question6",
      text: "collapse.answer6",
    },
    {
      id: 7,
      title: "collapse.question7",
      text: "collapse.answer7",
    },
    {
      id: 8,
      title: "collapse.question8",
      text: "collapse.answer8",
    },
  ];

  return (
    <CollapseStyle  id="vopros">
      <Container>
        <Collapse accordion bordered={false} defaultActiveKey={1} style={{width:"60%", margin:"auto"}} data-aos={"fade-up"}>
          {data.map((item) => (
            <Panel  header={t(item.title)} key={item.id} >
              {t(item.text)}
            </Panel>
          ))}
        </Collapse>
      </Container>
    </CollapseStyle>
  );
};

export default Collapses;
