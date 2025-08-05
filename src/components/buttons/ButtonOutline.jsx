import React from "react";

const ButtonOutline = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  const baseClass = `
    relative flex items-center justify-center w-fit rounded-xl
    py-2 px-3 sm:py-3 sm:px-4
    gap-2 sm:gap-3
    bg-[#e1e1fe] 
    shadow-[inset_0px_0px_4.3px_0px_#4B4EFC]
    cursor-pointer transition-all duration-300 ease-out
    hover:bg-[#d4d4fd] 
    hover:shadow-[inset_0px_0px_8px_0px_#4B4EFC] 
    hover:scale-105
    active:scale-95 
    active:shadow-[inset_0px_0px_12px_0px_#4B4EFC]
    group
    text-[#3A3DCC]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B4EFC]
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      <span
        className="relative z-10 font-medium text-sm sm:text-base leading-5 tracking-normal
                   flex items-center justify-center whitespace-nowrap text-inherit
                   transition-colors duration-300
                   group-hover:text-[#3A3DCC] group-active:text-[#2A2DB8]"
      >
        {children}
      </span>
    </button>
  );
};

export default ButtonOutline;
