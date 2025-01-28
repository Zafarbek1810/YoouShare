import React from "react";
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
              <img src="/LogoHorizon.svg" alt="Footer logo" width={250} height={80}/>
          </div>
      </LoaderWrapper>
  );
};

export default Loader;
