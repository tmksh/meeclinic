/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ReasonPc = ({ one, className }) => {
  const getBackgroundImage = () => {
    switch (one) {
      case "reason-2":
        return "/img/reason-2.png";
      case "reason-3":
        return "/img/reason-3.png";
      case "reason-4":
        return "/img/reason-4.png";
      case "reason-5":
        return "/img/reason-5.png";
      default:
        return "/img/reason-1.png";
    }
  };

  const getBackgroundSize = () => {
    if (["reason-1", "reason-4"].includes(one)) {
      return "cover";
    }
    return "100% 100%";
  };

  const getBackgroundPosition = () => {
    if (["reason-1", "reason-4"].includes(one)) {
      return "50% 50%";
    }
    return "center";
  };

  return (
    <div
      className={`relative h-[250px] md:h-[280px] xl:h-[340px] ${
        one === "reason-3"
          ? "w-[300px] md:w-[320px] xl:w-[397px]"
          : "w-[300px] md:w-[350px] xl:w-[420px]"
      } ${["reason-1", "reason-2"].includes(one) ? "aspect-[1.24]" : ""} ${className}`}
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: getBackgroundSize(),
        backgroundPosition: getBackgroundPosition(),
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

ReasonPc.propTypes = {
  one: PropTypes.oneOf([
    "reason-2",
    "reason-1",
    "reason-5",
    "reason-4",
    "reason-3",
  ]),
};
