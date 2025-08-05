import React from "react";
import ButtonStar from "../buttons/ButtonStar";
import { missioncards } from "@/assets/data";
import ButtonGradient from "../buttons/ButtonGradient";
import { ArrowRight2 } from "iconsax-reactjs";

const Section4 = () => {
  return (
<div className="flex flex-col w-full mx-auto self-stretch px-4 sm:px-10 lg:px-28 py-10 sm:py-16 bg-[#F8F8FF] justify-start items-center gap-6 sm:gap-12">
  <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-6 sm:gap-12">
    {/* Heading Section */}
    <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-start gap-6">
      <ButtonStar>Why D2D Spot?</ButtonStar>

      <div className="w-full flex flex-col sm:flex-row self-stretch items-center sm:items-start gap-6">
        <h2 className="inline sm:flex flex-col w-full text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug text-center sm:text-left">
          Empowering Your Future with <br className="hidden sm:block" />
          <span className="text-primary font-semibold">Innovation</span>
        </h2>

        {/* Move this button below heading on mobile */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <ButtonGradient className="w-fit sm:w-full max-sm:justify-center">
            Explore Services <ArrowRight2 />
          </ButtonGradient>
        </div>
      </div>
    </div>

    {/* Cards Grid */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {missioncards.map((card, idx) => (
        <div
          key={idx}
          className="w-full p-4 sm:p-5 bg-[#F8F8FF] rounded-[20px] outline-1 outline-offset-[-1px] outline-Color flex flex-col justify-start items-start gap-6"
        >
          <div className="w-full flex flex-col justify-start items-center gap-6">
            <div className="size-14 relative overflow-hidden">
              {Array.isArray(card.img) ? (
                <>
                  {card.img[0] && (
                    <img
                      className="size-4 left-[22.50px] top-[4.66px] absolute bg-blend-overlay"
                      src={card.img[0]}
                      alt=""
                    />
                  )}
                  {card.img[1] && (
                    <img
                      className="w-14 h-8 left-[2.59px] top-[21.72px] absolute bg-blend-overlay"
                      src={card.img[1]}
                      alt=""
                    />
                  )}
                </>
              ) : (
                <img
                  className="w-11 h-12 left-[6px] top-[6px] absolute bg-blend-overlay"
                  src={card.img}
                  alt=""
                />
              )}
            </div>

            <div className="w-full flex flex-col justify-start items-center gap-3.5">
              <h3 className="text-center text-xl font-medium text-primary">
                {card.title}
              </h3>
              <p className="text-center text-sm text-slate-800 leading-tight">
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Section4;
