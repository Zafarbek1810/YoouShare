import React, { useEffect, useState } from "react";
import CouponStyle from "./coupon.style";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useRouter } from "next/router";
import Modal from "../../Common/Modal";
import Header from "../../Pages/HeaderCoupon/Header";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Alert } from "antd";
import { getCountries } from "react-phone-number-input";
import { getCountryCallingCode } from 'react-phone-number-input/input';
import { parsePhoneNumberFromString } from 'react-phone-number-input';
import { formatPhoneNumber } from "react-phone-number-input";
import { toast } from "react-toastify";

const Coupon = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [url, setUrl] = useState("https://yoou.uz");
  const [referralsCode, setReferralsCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  

  const handlePhoneNumberChange = (value) => {
    setPhone(value);
    setCode(getCountryCallingCode("UZ"));

  };

  useEffect(() => {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    let referralsCode;
   
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == "referralsCode") {
        console.log("referralsCode: ", pair[1]);
        referralsCode = pair[1];
      }
    }
    setReferralsCode(referralsCode);

    let u = navigator.userAgent;
    let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    if (isAndroid) {
      setUrl("https://play.google.com/store/apps/details?id=com.yoousharefcm");
    }
    if (isIOS) {
      setUrl("https://apps.apple.com/cn/app/yoou-share/id1537781052");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, "submit");

    if (phone) {
      axios
        .post(
          "https://yoou.stwpower.com/power_bank/api/user/saveReferralRecord",
          {
            referralCode: referralsCode,
            code: +code,
            phone: +phone.slice(4),
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.data.code === 200) {
            setIsSuccess(true);
            setTimeout(() => {
              router.push(url);
            }, 5000);
          } else {
            // <Alert message="isss" type="error" />
            toast.error(response.data.message)
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  };

  console.log(phone.slice(1))

  return (
    <>
      <Header />
      <CouponStyle>
        {isSuccess ? (
          <div className="modal">
            <Modal setIsSuccess={setIsSuccess} />
          </div>
        ) : null}
        <div className="wrapper">
          <form className="submit" onSubmit={handleSubmit}>
            <PhoneInput
              international
              defaultCountry="UZ"
              value={phone}
              onChange={handlePhoneNumberChange}
            />
            <button type="submit" className="btn">
              {t("couponPage.btn")}
            </button>
          </form>
          <p>{t("couponPage.text")}</p>
        </div>
      </CouponStyle>
    </>
  );
};

export default Coupon;
