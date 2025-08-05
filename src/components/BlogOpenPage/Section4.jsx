import React from "react";

const Section4 = ({
  title = "Key Takeaway",
  content = `"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."`,
}) => {
  return (
    <div className="w-full max-w-screen-md mx-auto p-6 sm:p-8 bg-slate-50 rounded-tr-lg rounded-br-lg border-l-4 border-blue-700">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl font-semibold font-[Poppins] text-black leading-snug">
          {title}
        </h3>
        <p className="text-base sm:text-lg font-normal font-[Poppins] text-black leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Section4;
