import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Container from "../../Common/Container/index";
import PrivacyWrapper from "./privacy.style";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <PrivacyWrapper>
      <Container>
        <p>
          <Trans
            i18nKey="privacy.new_text"
            components={{
              title: <h3 style={{ fontSize: "20px", textAlign: "center" }} />,
              link1: (
                <a
                  href="https://yoou.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                />
              ),
              link2: (
                <a
                  href="https://yoou.uz/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                />
              ),
            }}
          />
        </p>
        {/* <p>{t("privacy.text")}</p>
        <p>{t("privacy.text2")}</p>
        <p>{t("privacy.text3")}</p> */}
      </Container>
    </PrivacyWrapper>
  );
};

export default Privacy;
