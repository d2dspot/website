import React from "react";

const ButtonPlain = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  const baseClass = `
    relative flex items-center justify-center w-fit rounded-xl
    py-2 px-3 sm:py-3 sm:px-4 
    gap-2 sm:gap-3 
    bg-[#f8f8ff] outline outline-2 outline-gray-200 text-slate-500
    cursor-pointer transition-all duration-300 ease-out
    hover:scale-105 active:scale-95
    focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      <span
        className="relative z-10 font-medium text-sm sm:text-base leading-5 tracking-normal
                   flex items-center justify-center whitespace-nowrap text-inherit"
      >
        {children}
      </span>
    </button>
  );
};

export default ButtonPlain;
