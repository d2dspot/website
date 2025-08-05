  import React from "react";

  const ButtonSimple = ({
    children = "Button",
    onClick = () => {},
    className = "",
    type = "button",
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={` cursor-pointer px-5 py-2 rounded-[8px] inline-flex justify-center items-center border border-primary text-primary font-medium text-sm gap-2 ${className}`}
      >
        {children}
      </button>
    );
  };

  export default ButtonSimple;
