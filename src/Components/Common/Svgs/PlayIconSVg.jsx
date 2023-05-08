import React from "react";

const PlayIconSVg = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_45_5077)">
        <rect
          width="120"
          height="120"
          rx="60"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.302 35.3057C47.1047 34.8675 48.0826 34.9025 48.8519 35.3971L83.8519 57.8971C84.5675 58.3571 85 59.1493 85 60C85 60.8507 84.5675 61.6429 83.8519 62.1029L48.8519 84.6029C48.0826 85.0975 47.1047 85.1325 46.302 84.6943C45.4993 84.2561 45 83.4145 45 82.5V37.5C45 36.5855 45.4993 35.7439 46.302 35.3057ZM50 42.0792V77.9208L77.8769 60L50 42.0792Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_45_5077"
          x="-20"
          y="-20"
          width="160"
          height="160"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_45_5077"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_45_5077"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PlayIconSVg;
