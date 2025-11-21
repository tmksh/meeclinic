/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ReasonPc = ({ one, className }) => {
  return (
    <div
      className={`relative h-[250px] md:h-[280px] xl:h-[340px] bg-contain bg-center bg-no-repeat ${
        one === "reason-3"
          ? "w-[300px] md:w-[320px] xl:w-[397px]"
          : "w-[300px] md:w-[350px] xl:w-[420px]"
      } ${["reason-1", "reason-2"].includes(one) ? "aspect-[1.24]" : ""} ${
        one === "reason-2"
          ? "bg-[url(/img/reason-2.png)]"
          : one === "reason-3"
          ? "bg-[url(/img/reason-3.png)]"
          : one === "reason-4"
          ? "bg-[url(/img/reason-4.png)]"
          : one === "reason-5"
          ? "bg-[url(/img/reason-5.png)]"
          : "bg-[url(/img/reason-1.png)]"
      } ${className}`}
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
