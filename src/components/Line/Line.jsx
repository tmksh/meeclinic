/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Line = ({ link, className, subtract = "/img/subtract-1.svg" }) => {
  return (
    <div className={`relative top-[227px] left-5 w-12 h-12 ${className}`}>
      <img
        className="absolute w-full h-[95.83%] top-[2.08%] left-0"
        alt="Subtract"
        src={subtract}
      />
    </div>
  );
};

Line.propTypes = {
  link: PropTypes.oneOf(["white"]),
  subtract: PropTypes.string,
};
