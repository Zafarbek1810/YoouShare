import React, { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import CouponStyle from "./coupon.style";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useRouter } from "next/router";
import Modal from "../../Common/Modal";
import Header from "../../Pages/HeaderCoupon/Header";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Alert } from "antd";

const Coupon = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [url, setUrl] = useState("https://yoou.uz");
  const [referralsCode, setReferralsCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
    console.log(phone);

    if (phone) {
      axios
        .post(
          "https://yoou.stwpower.com/power_bank/api/user/saveReferralRecord",
          {
            referralCode: referralsCode,
            phone: phone,
          }
        )
        .then(function (response) {
          if (response.data.code === 200) {
            setIsSuccess(true);
            setTimeout(() => {
              router.push(url);
            }, 5000);
          } else {
            <Alert message={response.data.message} type="error" />
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  };

  console.log(phone)

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
            {/* <select>
              {code.map((item) => (
                <option
                  key={item}
                  value={item.dial_code}
                  defaultValue={item.code === "UZ"}
                >
                  {item.code}
                </option>
              ))}
            </select> */}
            <PhoneInput
              international
              defaultCountry="UZ"
              onChange={(value) => setPhone(value)}
            />
            {/* <PatternFormat
              type="tel"
              format="998#########"
              mask="_"
              onValueChange={(value) => setPhone(value.formattedValue)}
              placeholder="+998 "
              required
              className="inputNumber"
            /> */}
            <button type="submit" className="btn">
              {t("couponPage.btn")}
            </button>
          </form>
          <h2>{t("couponPage.title")}</h2>
        </div>
      </CouponStyle>
    </>
  );
};

export default Coupon;
