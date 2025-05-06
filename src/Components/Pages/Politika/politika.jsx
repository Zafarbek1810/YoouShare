import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Container from "../../Common/Container/index";
import PolitikaWrapper from "./politika.style";

const Politika = () => {
  const { t } = useTranslation();

  const text = t("politika.new_text", {
    link1: `<a href="https://yoou.uz" target="_blank" rel="noopener noreferrer">https://yoou.uz</a>`,
  });

  return (
    <PolitikaWrapper>
      <Container>
        <p>
          <Trans
            i18nKey="politika.new_text"
            components={{
              1: (
                <a
                  href="https://yoou.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                />
              ),
              2: (
                <a
                  href="mailto:info@yoou.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                />
              ),
              3: (
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
      </Container>
    </PolitikaWrapper>
  );
};

export default Politika;
