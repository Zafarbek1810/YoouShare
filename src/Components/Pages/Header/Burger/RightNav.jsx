import React, { useEffect } from "react";
import { RightNavWrapper } from "./RightNav.style";
import { useRouter } from "next/router";
import MyLink from "../../../Common/MyLink";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Option } from "antd/lib/mentions";

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
            to="/#id"
            className={router.pathname == "/#id" ? "active" : "link"}
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
              defaultValue="ru"
              bordered={false}
              style={{
                width: 120,
                backgroundColor: "transparent",
                color: "#043353",
              }}
              suffixIcon={<CaretDownOutlined />}
              onChange={handleChange}
            >
              <Option value="ru">
                <span className="fi fi-ru"></span> Русский
              </Option>
              <Option value="en">
                <span className="fi fi-us"></span> English
              </Option>
            </Select>
          </div>
        </li>
      </ul>
    </RightNavWrapper>
  );
};

export default RightNav;
