/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ReasonPc = ({ one, className }) => {
  return (
    <div
      className={`left-5 h-[340px] relative ${one === "reason-3" ? "w-[397px]" : "w-[420px]"} ${["reason-1", "reason-2"].includes(one) ? "aspect-[1.24]" : ""} ${one === "reason-2" ? "top-[419px]" : (one === "reason-3") ? "top-[818px]" : one === "reason-4" ? "top-[1217px]" : one === "reason-5" ? "top-[1616px]" : "top-5"} ${["reason-1", "reason-4"].includes(one) ? "bg-cover" : "bg-[100%_100%]"} ${one === "reason-2" ? "bg-[url(/img/reason-2.png)]" : (one === "reason-3") ? "bg-[url(/img/reason-3.png)]" : one === "reason-4" ? "bg-[url(/img/reason-4.png)]" : one === "reason-5" ? "bg-[url(/img/reason-5.png)]" : "bg-[url(/img/reason-1.png)]"} ${["reason-1", "reason-4"].includes(one) ? "bg-[50%_50%]" : ""} ${className}`}
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
