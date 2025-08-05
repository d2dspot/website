import React from "react";
import star from "/assets/star.svg";
import GradientCard from "./GradientCard";
import ButtonSimple from "../buttons/ButtonSimple";
import { Edit } from "iconsax-reactjs";

const ICON_CLASS = "w-6 h-6 text-base";

const ServiceCardV2 = ({
  icon,
  title,
  subtitle,
  description,
  points = [],
  onEditClick,
  containerClass = "",
}) => {
const OpenModal = () => {
  if (onEditClick) onEditClick();
};

  return (
    <div
      className={`w-full h-fit  p-4 sm:p-5 bg-transparent rounded-[20px]  outline-1 outline-offset-[-1px] outline-primary flex flex-col justify-start items-start gap-4 overflow-hidden ${containerClass}`}
    >
      {/* Header Row */}
      <div className="w-full flex justify-between items-center gap-4">
        <div className="flex items-center">
          <GradientCard className="w-fit">
            {icon && React.createElement(icon, { className: ICON_CLASS })}
          </GradientCard>
        </div>

        <ButtonSimple
        
          onClick={OpenModal}
          childClassName=""
        >
          Edit <Edit size={14}/>
        </ButtonSimple>
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
          <div key={index} className="w-full flex items-center gap-3">
            <div className="w-6 flex justify-center items-start pt-1">
              <img src={star} alt="bullet" className="w-full h-full" />
            </div>
            <p className="text-sm text-primary leading-tight">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCardV2;
