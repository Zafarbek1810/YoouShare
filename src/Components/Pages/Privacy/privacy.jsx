import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../Common/Container/index";
import PrivacyWrapper from "./privacy.style";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <PrivacyWrapper>
      <Container>
        <p>{t("privacy_text")}</p>
        {/* <p>{t("privacy.text")}</p>
        <p>{t("privacy.text2")}</p>
        <p>{t("privacy.text3")}</p> */}
      </Container>
    </PrivacyWrapper>
  );
};

export default Privacy;
