import React from "react";

const GradientCard = ({ children, className = "" }) => {
  const baseClass = `
    relative flex flex-col justify-center items-center
    rounded-[12px] border border-white/20
    bg-[radial-gradient(79.05%_110.71%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)]
    overflow-hidden text-white
    w-[200px] sm:w-full max-w-[395px]
    p-3 sm:p-5
    h-[40px] sm:h-fit
  `;

  return (
    <div className={`${baseClass} ${className}`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/shade.png')] opacity-15 mix-blend-overlay bg-repeat z-0 " />
      
      {/* Content */}
      <div className="relative z-10  ">
        {children}
      </div>
    </div>
  );
};

export default GradientCard;
