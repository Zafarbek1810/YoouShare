import React from "react";
import InviteWrapper from "./Invite.style";
import Container from "../../../Common/Container";

const Invite = () => {
  return (
    <InviteWrapper>
      <Container>
        <div className="wrap">
          <div className="left" data-aos={"fade-right"}>
            <h3 className="title">Приглашай друга и получи денег в баланс</h3>
            <div className="text">
              Отправляешь ссылку другу а он проходит регистрацию по ссылке и все
            </div>
            <button>Отправить ссылку</button>
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
