import React from "react";
import star from "/assets/star.svg";

const ButtonStar = ({ children, className = "", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative w-fit flex items-center 
        h-[44px] sm:h-[48px] 
        px-3 py-2 sm:px-4 
        gap-2 sm:gap-3
        border-2 border-primary rounded-xl
        text-sm sm:text-base text-primary font-medium
        bg-transparent 
        justify-center
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
        transition-all duration-200 ease-out
        ${className}`}
    >
      <img
        src={star}
        alt="star icon"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
      <span className="whitespace-nowrap leading-tight">{children}</span>
    </button>
  );
};

export default ButtonStar;
