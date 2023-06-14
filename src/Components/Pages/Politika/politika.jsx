import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../Common/Container/index"
import PolitikaWrapper from "./politika.style";

const Politika = () => {
  const { t } = useTranslation();

  return (
    <PolitikaWrapper>
      <Container>
        <p>{t("politika.text2")}</p>
      </Container>
    </PolitikaWrapper>
  );
};

export default Politika;
