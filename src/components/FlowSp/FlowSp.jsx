/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FlowSp = ({ one, className }) => {
  return (
    <div
      className={`aspect-[1] left-5 w-[169px] h-[169px] relative ${one === "flow2" ? "top-[267px]" : (one === "flow3") ? "top-[513px]" : one === "flow4" ? "top-[760px]" : "top-5"} ${["flow3", "flow4"].includes(one) ? "bg-[100%_100%]" : "bg-cover"} ${one === "flow2" ? "bg-[url(/img/rectangle-140-2.png)]" : (one === "flow3") ? "bg-[url(/img/rectangle-140-3.png)]" : one === "flow4" ? "bg-[url(/img/rectangle-140-4.png)]" : "bg-[url(/img/rectangle-140-1.png)]"} ${["flow1", "flow2"].includes(one) ? "bg-[50%_50%]" : ""} ${className}`}
    />
  );
};

FlowSp.propTypes = {
  one: PropTypes.oneOf(["flow2", "flow3", "flow1", "flow4"]),
};
