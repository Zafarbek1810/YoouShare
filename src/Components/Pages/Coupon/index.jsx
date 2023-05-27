import React, { useState } from "react";
import { PatternFormat } from "react-number-format";
import CouponStyle from "./coupon.style";
import { useTranslation } from "react-i18next";

const Coupon = () => {
  const [phone, setPhone] = useState("");


  const { t } = useTranslation();


  return (
    <CouponStyle>
      <div className="wrapper">
        <h2>
          {t("couponPage.title")}
        </h2>
        <div className="submit">
          <Patte rnFormat
            type="tel"
            format="+998 ## ### ## ##"
            mask="_"
            onValueChange={(value) => setPhone(value.formattedValue)}
            placeholder="+998 "
            required
            className="inputNumber"
          />
          <a href="" className="btn">
          {t("couponPage.btn")}
          </a>
        </div>
        <div className="qr">
          <img src="/images/qrCode.png" alt="" />
        </div>
      </div>
    </CouponStyle>
  );
};

export default Coupon;
