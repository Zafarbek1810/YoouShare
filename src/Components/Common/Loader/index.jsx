import React from "react";
import LogoHorizon from "../../Common/Svgs/LogoHorizon";
import { LoaderWrapper } from "./Loader.style";
const Loader = ({ loading2 }) => {
  return (
    <LoaderWrapper
      style={{
        transform: `translateY(${loading2 ? "100%" : 0})`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div className="logo">
        <LogoHorizon />
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
