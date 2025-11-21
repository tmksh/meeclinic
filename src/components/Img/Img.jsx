/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Img = ({
  one,
  elementClassName,
  element = "/img/1.svg",
  maskGroupClassName,
  maskGroup = "/img/mask-group.png",
  img = "/img/mask-group-1.png",
}) => {
  return (
    <>
      {one === "one" && (
        <img
          className={`absolute top-0 left-0 w-11 h-11 ${elementClassName}`}
          alt="Element"
          src={element}
        />
      )}

      {["three", "two"].includes(one) && (
        <div
          className={`w-11 flex top-5 h-11 relative ${one === "three" ? "left-36" : "left-[82px]"} ${elementClassName}`}
        >
          <img
            className={`${one === "three" ? "w-11" : "w-[41px]"} ${one === "three" ? "mt-1" : "mt-[3px]"} ${one === "two" ? "ml-0.5" : ""} ${one === "three" ? "h-9" : "h-[38px]"} ${maskGroupClassName}`}
            alt="Mask group"
            src={one === "three" ? img : maskGroup}
          />
        </div>
      )}
    </>
  );
};

Img.propTypes = {
  one: PropTypes.oneOf(["two", "three", "one"]),
  element: PropTypes.string,
  maskGroup: PropTypes.string,
  img: PropTypes.string,
};
