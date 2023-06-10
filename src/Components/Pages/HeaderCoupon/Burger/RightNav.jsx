import React, { useEffect } from "react";
import { RightNavWrapper } from "./RightNav.style";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import MyLink from "../../../Common/MyLink";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import DownIcon from "../../../Common/Svgs/DownIcon";

const RightNav = ({ open }) => {
  const { t, i18n } = useTranslation();
  const defaultLang = i18n.language;
  const router = useRouter();

  const handleChange = (e) => {
    localStorage.setItem("siteLang", e);
    i18n.changeLanguage(e);
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //   });
  //   AOS.refresh();
  // }, []);

  // const handleChange = (value) => {
  //   // localStorage.setItem("siteLang", value);
  //   // i18n.changeLanguage(value);
  //   // console.log(value);

  //   console.log("chnge lang");
  // };

  return (
    <RightNavWrapper open={open}>
      <ul className="header">
        <li>
          <MyLink to="/" className={router.pathname == "/" ? "active" : "link"}>
            {t("navbar.main")}
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/partners"
            className={router.pathname == "/partners" ? "active" : "link"}
          >
            {t("navbar.earnWith")}
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/#tarif"
            className={router.pathname == "/#tarif" ? "active" : "link"}
          >
            {t("navbar.howMuch")}
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/who_we_are"
            className={router.pathname == "/who_we_are" ? "active" : "link"}
          >
            {t("navbar.whoWe")}
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/contacts"
            className={router.pathname == "/contacts" ? "active" : "link"}
          >
            {t("navbar.contact")}
          </MyLink>
        </li>
        <li>
          <div className="lang">
            <Select
              value={defaultLang}
              bordered={false}
              style={{
                width: 120,
                backgroundColor: "transparent",
                color: "#043353",
              }}
              suffixIcon={<DownIcon />}
              onChange={handleChange}
            >
              <Option value="ru" className="options">
                <img src="/images/ru.png" alt="Russian flag" /> Рус
              </Option>
              <Option value="en" className="options">
              <img src="/images/us.png" alt="American flag" /> Eng
              </Option>
              <Option value="uz" className="options">
              <img src="/images/uz.png" alt="Uzbekistan flag" /> Uzb
              </Option>
            </Select>
          </div>
        </li>
      </ul>
    </RightNavWrapper>
  );
};

export default RightNav;
