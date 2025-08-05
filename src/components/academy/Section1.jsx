import React from "react";
import ButtonStar from "../buttons/ButtonStar";
import ButtonGradient from "../buttons/ButtonGradient";
import ButtonOutline from "../buttons/ButtonOutline";
import { FaChevronRight } from "react-icons/fa";

const Section1 = () => {
  const startProjectHandler = () => {};

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[150px] mt-16 sm:mt-20">
      <div className="flex flex-col items-center w-full  py-10 sm:py-16 gap-6 sm:gap-8  ">
        {/* Tagline Button */}
        <ButtonStar>D2dspot Academy</ButtonStar>

        {/* Title */}
        <div className="z-10 w-full sm:max-w-[1140px] flex flex-col items-center justify-center text-center">
          <h2 className="text-[#0F254F] text-2xl sm:text-5xl md:text-6xl lg:text-[85px] font-normal leading-snug sm:leading-tight tracking-tight capitalize whitespace-nowrap">
            Empowering Every Future
          </h2>
          <h2 className="text-[#0F254F] text-2xl sm:text-5xl md:text-6xl lg:text-[85px] font-normal leading-snug sm:leading-tight tracking-tight capitalize whitespace-nowrap">
            with {" "}
            <span className="font-semibold text-transparent bg-[radial-gradient(155.78%_218.27%_at_50%_-118.27%,_#F5F5FF_0%,_#4B4EFC_100%)] bg-clip-text">
              AI Education
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="z-10 text-sm sm:text-base md:text-lg text-center text-[#263343] max-w-[864px] px-2">
          We turn bold ideas into real-world products. From startups to student
          founders, d2dspot partners with dreamers to design, build, and scale
          what’s next in tech.
        </p>

        {/* CTA Buttons */}
        <div className="z-10 flex sm:flex-row w-full max-w-md gap-4 sm:gap-6 justify-center mx-auto">
          <ButtonGradient onClick={startProjectHandler}>
            Request a demo
          </ButtonGradient>
        </div>
      </div>
    </div>
  );
};

export default Section1;
