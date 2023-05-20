import React, { useEffect } from "react";
import { RightNavWrapper } from "./RightNav.style";
import { useRouter } from "next/router";
import MyLink from "../../../Common/MyLink";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import DownIcon from "../../../Common/Svgs/DownIcon";

const RightNav = ({ open }) => {
  const router = useRouter();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //   });
  //   AOS.refresh();
  // }, []);

  const handleChange = (value) => {
    // localStorage.setItem("siteLang", value);
    // i18n.changeLanguage(value);
    // console.log(value);

    console.log("chnge lang");
  };

  return (
    <RightNavWrapper open={open}>
      <ul className="header">
        <li>
          <MyLink to="/" className={router.pathname == "/" ? "active" : "link"}>
            Главная
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/partners"
            className={router.pathname == "/partners" ? "active" : "link"}
          >
            Зарабатывай вместе
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/#tarif"
            className={router.pathname == "/#tarif" ? "active" : "link"}
          >
            Сколько стоит?
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/who_we_are"
            className={router.pathname == "/who_we_are" ? "active" : "link"}
          >
            Кто мы?
          </MyLink>
        </li>
        <li>
          <MyLink
            to="/contacts"
            className={router.pathname == "/contacts" ? "active" : "link"}
          >
            Контакты
          </MyLink>
        </li>
        <li>
          <div className="lang">
            <Select
              // value={defaultLang}
              defaultValue="en"
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
                <img src="/images/ru.png" alt="" /> Рус
              </Option>
              <Option value="en" className="options">
              <img src="/images/us.png" alt="" /> Eng
              </Option>
              <Option value="uz" className="options">
              <img src="/images/uz.png" alt="" /> Uzb
              </Option>
            </Select>
          </div>
        </li>
      </ul>
    </RightNavWrapper>
  );
};

export default RightNav;
