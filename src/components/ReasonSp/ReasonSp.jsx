/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ReasonSp = ({ one, className }) => {
  return (
    <div
      className={`w-[363px] bg-[100%_100%] h-[300px] relative ${["reason-1", "reason-2", "reason-4", "reason-5"].includes(one) ? "aspect-[1.21]" : ""} ${["reason-4", "reason-5"].includes(one) ? "left-[29px]" : "left-5"} ${one === "reason-5" ? "top-[1136px]" : (one === "reason-3") ? "top-[392px]" : one === "reason-2" ? "top-5" : one === "reason-1" ? "top-[1508px]" : "top-[764px]"} ${one === "reason-5" ? "bg-[url(/img/reason4-1.png)]" : (one === "reason-3") ? "bg-[url(/img/reason-2.png)]" : one === "reason-2" ? "bg-[url(/img/reason-1.png)]" : one === "reason-1" ? "bg-[url(/img/1-reason1.png)]" : "bg-[url(/img/reason-3.png)]"} ${className}`}
    />
  );
};

ReasonSp.propTypes = {
  one: PropTypes.oneOf([
    "reason-2",
    "reason-1",
    "reason-5",
    "reason-4",
    "reason-3",
  ]),
};
