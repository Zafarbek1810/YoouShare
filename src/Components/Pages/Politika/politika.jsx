import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Container from "../../Common/Container/index";
import PolitikaWrapper from "./politika.style";

const Politika = () => {
  const { t } = useTranslation();

  return (
    <PolitikaWrapper>
      <Container>
        <p>
          <Trans
            i18nKey="politika.new_text"
            components={{
              title: <h3 style={{ fontSize: "18px" }} />,
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
