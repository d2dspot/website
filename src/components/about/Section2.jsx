import React from "react";
import ButtonStar from "../buttons/ButtonStar";

const Section2 = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center gap-8">
      <div className="w-full max-w-[1440px] py-16 px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col items-start gap-6">
        
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 max-sm:justify-center max-sm:w-full">
          <div className="flex items-center gap-3 rounded-xl px-4 py-3">
            <ButtonStar>Introducing d2dspot</ButtonStar>
          </div>
        </div>

        {/* Title and Content */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-16">
          
          {/* Title */}
          <div className="text-[#0F172A] w-full sm:w-fit text-3xl sm:text-5xl font-normal leading-snug sm:leading-tight max-sm:text-center">
            Let me Tell you,<br />
            what is
            <span className="font-semibold text-transparent bg-[radial-gradient(110.72%_79.22%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)] bg-clip-text">
              {" "}d2dspot?
            </span>
          </div>

          {/* Description */}
          <div className="flex-1 text-[#263343] text-sm sm:text-lg md:text-xl leading-relaxed max-sm:text-center">
            d2dspot is a product innovation and technology partner helping
            startups, entrepreneurs, and students turn ideas into real,
            scalable solutions. We specialize in MVP development, UI/UX
            design, and end-to-end tech services while offering guidance,
            collaboration, and long-term support. Whether you're building
            your first product or growing your business, d2dspot is here to
            create, launch, and succeed together with purpose.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
