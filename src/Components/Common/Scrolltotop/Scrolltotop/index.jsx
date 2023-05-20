import React, { useEffect, useState } from "react";
import { ScrollToTopStyle } from "./scrolltotop.style";
import ToTopIconSvg from "../../Svgs/ToTopIconSvg";

const ScrolltoTop = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    const handler = (event) => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false)
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <ScrollToTopStyle
      onClick={onClick}
      style={{ visibility: visible ? "visible" : "hidden", scrollBehavior: "smooth" }}
    >
      <div className="flow">
        <ToTopIconSvg className="icon" />
      </div>
    </ScrollToTopStyle>
  );
};

export default ScrolltoTop;
