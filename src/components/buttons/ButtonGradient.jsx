import React from "react";

const ButtonGradient = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  const baseClass = `
    w-fit relative inline-flex items-center justify-center
    h-[42px] sm:h-[44px]
    px-3 py-2 sm:px-4 sm:py-3
    gap-2 sm:gap-3
    rounded-[12px] border border-white/20
    text-white font-medium text-sm sm:text-base
    leading-tight tracking-normal
    bg-[radial-gradient(79.05%_110.71%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)]
    overflow-hidden cursor-pointer
    transition-all duration-300 ease-out
    hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25
    hover:border-white/30
    active:scale-95 group
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white
    disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:hover:shadow-none
  `;

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {/* Noise layers (unchanged) */}
      <div
        className="absolute inset-0 opacity-20 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' ...")`,
          backgroundSize: "100px 100px",
        }}
      />
      <div
        className="absolute inset-0 opacity-15 z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' ...")`,
          backgroundSize: "80px 80px",
          backgroundPosition: "20px 20px",
        }}
      />
      <div
        className="absolute inset-0 opacity-10 z-[3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' ...")`,
          backgroundSize: "60px 60px",
          backgroundPosition: "10px 10px",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 z-[4] group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.1) 50%, 
              rgba(255, 255, 255, 0.05) 100%
            )`,
        }}
      />

      {/* Button text */}
      <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export default ButtonGradient;
