import React from "react";

const Input = ({
  placeholder,
  padding,
  text,
  border,
  width,
  height,
  bgradius,
  shadow,
}) => {
  return (
    <div>
      <input
        type={text}
        placeholder={placeholder}
        className={`w-${width} ${border} rounded-${bgradius} h-${height} ${padding} ${shadow} `} // Apply Tailwind classes dynamically
      />
    </div>
  );
};

export default Input;
