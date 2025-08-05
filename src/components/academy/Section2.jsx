import React from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

const Section2 = () => {
  const stats = [
    {
      value: 1800,
      suffix: "+",
      label: "Job opportunities by 2026*",
    },
    {
      value: 900000,
      prefix: "INR ",
      suffix: "+",
      label: "Average salary at entry level",
    },
    {
      value: 55,
      suffix: "%",
      label: "Average salary hike of D2dspot learners",
    },
    {
      value: 85000,
      suffix: "+",
      label: "Career transitions in varied domains",
    },
  ];

  return (
   <div className=" w-full px-4 sm:px-8 md:px-16 lg:px-36 py-12 bg-white flex flex-col items-center">
  <div className="z-10 w-full sm:max-w-[1140px] bg-[radial-gradient(79.05%_110.71%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
    {stats.map((item, index) => (
      <React.Fragment key={index}>
        <div className="flex-1 flex flex-col items-center text-center text-white">
          <div className=" text-xl sm:text-3xl font-medium leading-[48px] flex items-baseline gap-1">
            {item.prefix && <span>{item.prefix}</span>}
            <NumberTicker value={item.value} className="text-white" />
            {item.suffix && <span>{item.suffix}</span>}
          </div>
          <div className="text-sm sm:text-base font-normal leading-normal mt-1">
            {item.label}
          </div>
        </div>
        {index !== stats.length - 1 && (
          <div className=" sm:block w-full sm:w-px h-px sm:h-20 bg-gray-600 " />
        )}
      </React.Fragment>
    ))}
  </div>
  <p className="text-xs text-gray-500 text-center mt-4">
    *Based on industry forecasts and market research.
  </p>
</div>

  );
};

export default Section2;
