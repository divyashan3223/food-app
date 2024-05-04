import React from "react";

const Button = ({
  content,
  bgradius,
  bordercolor,
  padding,
  bgcolor,
  color,
  width,
}) => {
  return (
    <button
      className={` rounded-${bgradius} border-${bordercolor}  ${bgcolor} ${color} ${padding} ${width}`}
    >
      {content}
    </button>
  );
};

export default Button;
