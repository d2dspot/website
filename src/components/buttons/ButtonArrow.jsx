import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const ButtonArrow = ({
  direction = "right",
  onClick,
  isEnd = false,
  type = "button",
}) => {
  const Icon = direction === "right" ? IoIosArrowRoundForward : IoIosArrowRoundBack;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isEnd}
      aria-label={`Scroll ${direction}`}
      className={`w-10 h-10 sm:w-12 sm:h-12 
        flex items-center justify-center 
        rounded-[12px] p-1.5 sm:p-2 
        transition-all duration-200
        ${isEnd
          ? "border-primary text-primary cursor-not-allowed border"
          : "border border-white/20 text-white bg-[radial-gradient(79.05%_110.71%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 cursor-pointer"
        }
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
      style={{ borderWidth: "0.77px" }}
    >
      <Icon className="text-3xl sm:text-4xl" />
    </button>
  );
};

export default ButtonArrow;
