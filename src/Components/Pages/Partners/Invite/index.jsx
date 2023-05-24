import React from "react";
import InviteWrapper from "./Invite.style";
import { useTranslation } from "react-i18next";
import Container from "../../../Common/Container";

const Invite = () => {

  const { t } = useTranslation();

  return (
    <InviteWrapper>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <h3 className="title">{t("invite.title")}</h3>
            <div className="text">
             {t("invite.text")}
            </div>
            <button>{t("invite.btn")}</button>
          </div>

          <div className="right" data-aos={"fade-left"}>
            <div className="img">
              <img src="/images/announcement.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </InviteWrapper>
  );
};

export default Invite;
