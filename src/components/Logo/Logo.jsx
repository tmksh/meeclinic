/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Logo = ({ className, group = "/img/group-97-2.png", style }) => {
  return (
    <div
      className={`relative w-auto h-auto flex items-center justify-center ${className}`}
      style={style}
    >
      <img
        className="h-12 md:h-14 xl:h-16 w-auto object-contain"
        alt="mee clinic"
        src={group}
      />
    </div>
  );
};

Logo.propTypes = {
  group: PropTypes.string,
};
