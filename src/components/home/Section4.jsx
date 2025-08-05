import React from 'react';
import ButtonStar from '../buttons/ButtonStar';
import sam_1 from "/assets/ab_sam_1.jpg";
import sam_2 from "/assets/ab_sam_2.png";
import sam_3 from "/assets/ab_sam_3.png";
import sam_4 from "/assets/ab_sam_4.png";
import sam_5 from "/assets/ab_sam_5.png";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const Section4 = () => {
  const images = [sam_1, sam_2, sam_3, sam_4, sam_5];

  return (
    <div className="w-full px-4 sm:px-10 lg:px-28 py-4 sm:py-16 bg-violet-50 flex flex-col items-center gap-3  sm:gap-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <ButtonStar className=" ">
          Proof of Possibility
        </ButtonStar>

        <h2 className="text-[28px] sm:text-4xl lg:text-5xl leading-tight font-normal text-Foundation-Neutral-900">
          Explore how we turn ideas into{" "}
          <span className="font-semibold text-primary">working products</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-800 max-w-2xl leading-loose">
          Real stories from clients who partnered with d2dspot to build and launch successful digital products.
        </p>
      </div>

      {/* VelocityScroll Section */}
      <div className="relative w-full sm:w-screen flex items-center justify-center overflow-hidden">
        <VelocityScroll defaultVelocity={1} numRows={1}>
          <div className="inline-flex flex-nowrap gap-4 sm:gap-6 whitespace-nowrap px-1">
            {images.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[240px] sm:h-[300px] md:h-[350px] p-2 rounded-[20px]  outline-1 outline-violet-50"
              >
                <img
                  src={src}
                  alt={`img-${idx}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </VelocityScroll>

        {/* Fading overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-violet-50/70" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-violet-50/70" />
      </div>
    </div>
  );
};

export default Section4;
