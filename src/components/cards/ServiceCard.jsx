import React from "react";
import { motion, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";
import star from "/assets/star.svg";
import top_right from "/assets/top_right.svg";

import GradientCard from "./GradientCard";
import ButtonOutline from "../buttons/ButtonOutline";
import useIsSmallScreen from "@/hooks/useIsSmallScreen"; 


const ICON_CLASS = "w-6 h-6 text-base";

const ServiceCard = ({
  i,
  icon,
  title,
  subtitle,
  description,
  points = [],
  buttonText = "Contact Us",
  onButtonClick,
  containerClass = "",
  progress,
  range,
  targetScale,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const navigate = useNavigate();
  const isSmallScreen = useIsSmallScreen(); // Check screen size
  const animatedStyle = isSmallScreen ? {} : { scale };

  const handleNavigate = () => {
    if (onButtonClick) return onButtonClick();
    navigate("/contact");
  };

  return (
    <div
      className="flex items-center justify-center sm:sticky  z-5 w-full max-w-[560px] px-4 sm:px-0 mb-6"
      style={{ top: `calc(45vh + ${i * 5}px)` }}
    >
      <motion.div
        style={animatedStyle}
        className={`transform origin-top w-full self-stretch p-4 sm:p-5 bg-purple-50 rounded-[20px] outline-1 outline-offset-[-1px] outline-primary flex flex-col justify-start items-start gap-2 sm:gap-4 overflow-hidden ${containerClass}`}
      >
        {/* Header Row */}
        <div className="w-full flex flex-row sm:flex-row justify-between  items-center sm:items-center gap-4">
          <div className="flex justify-center sm:justify-start items-center">
            <GradientCard className="w-fit ">
              {icon && React.createElement(icon, { className: ICON_CLASS })}
            </GradientCard>
          </div>

          <ButtonOutline
            className="max-w-max px-4 py-2 sm:p-3 gap-2"
            onClick={handleNavigate}
          >
            {buttonText}
            <img src={top_right} className="ml-1 w-[20px] h-[20px]" alt="" />
          </ButtonOutline>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-300 border-t border-indigo-600/50" />

        {/* Title & Description */}
        <div className="text-primary text-xl sm:text-2xl font-semibold leading-7">
          {title}
        </div>
        <div className="text-Color-3 text-sm sm:text-base font-semibold leading-none">
          {subtitle}
        </div>
        <div className="text-Color-3 text-sm sm:text-base font-normal leading-loose tracking-normal">
          {description}
        </div>

        {/* Points List */}
        <div className="w-full flex flex-col gap-2">
          {points.map((point, index) => (
            <div key={index} className="w-full flex items-center gap-3 ">
              <div className="w-6 flex justify-center items-start pt-1 ">
                <img src={star} alt="bullet" className="w-full h-full" />
              </div>
              <p className="text-sm text-primary leading-tight">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
