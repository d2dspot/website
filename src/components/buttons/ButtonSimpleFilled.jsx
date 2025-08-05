import React from "react";

const ButtonSimpleFilled = ({
  children = "Button",
  onClick = () => {},
  className = "",
  childClassName="",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` cursor-pointer px-5 py-2  rounded-[8px] inline-flex flex-col  justify-center items-center border border-primary  bg-primary overflow-hidden ${className} `}
    >
    
        <div className={`  inline-flex justify-center items-center text-center text-Shades-50 text-sm font-medium leading-snug tracking-tight gap-2    text-white rounded-[8px]  flex-nowrap ${childClassName}`}>
          {children}
      </div>
    </button>
  );
};

export default ButtonSimpleFilled;
