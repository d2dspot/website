import React, { useState } from "react";
import ButtonStar from "../buttons/ButtonStar";
import ArrowButton from "../buttons/ButtonArrow";
import industryLeaderImage from "/assets/industry-leader.webp";
import { clientLogo } from "@/assets/data";
import { AnimatePresence, motion } from "framer-motion";

const Section3 = () => {
  const [index, setIndex] = useState(0);
const isMobile = window.innerWidth < 640; // or use a media query hook
const logosPerPage = isMobile ? 4 : 6;

  const activeClients = clientLogo.filter((client) => client.status);

  const itemWidth = 310; // Card width (250px + ~20px margin)
  const maxIndex = Math.max(activeClients.length - logosPerPage, 0);

  const handleNext = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full bg-[#F3F3FF] px-4 sm:px-[120px] py-10 sm:py-16 flex flex-col items-center gap-6 sm:gap-12 relative">
      {/* Header */}
      <div className="w-full max-w-[1160px] flex flex-col items-center gap-6 text-center">
        <ButtonStar>Trusted Partner</ButtonStar>
        <h2 className="text-[#0F172A] text-3xl sm:text-5xl leading-snug sm:leading-[64px] font-normal">
          Our Expertise –{" "}
          <span className="font-semibold text-transparent bg-[radial-gradient(ellipse_110.72%_79.22%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)] bg-clip-text">
            Trusted by Industry Leaders
          </span>
        </h2>
      </div>

      {/* Image & Content */}
      <div className="w-fit flex flex-col lg:flex-row items-start justify-center gap-8 max-sm:items-center">
        {/* Left Image */}
        <img
          src={industryLeaderImage}
          alt="Industry Leader"
          className="w-full h-70 max-w-[320px] sm:w-[360px] sm:h-auto rounded-lg object-cover"
        />

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-between gap-6  sm:gap-12" >
          {/* Description and Arrows */}
          <div className="w-full sm:w-fit flex flex-col lg:flex-row gap-6 sm:gap-10 items-center lg:items-end justify-between pl-0 sm:pl-6 text-center sm:text-left">
            <p className="text-[#263343] text-sm  sm:text-lg leading-relaxed w-[90%] sm:w-full max-w-3xl">
              Our commitment to cutting-edge innovation drives success for
              global tech leaders. With strategic alliances and high-performance
              solutions, we deliver robust, scalable outcomes. We craft tailored
              tech strategies to boost efficiency and growth, adapting to market
              demands. Our end-to-end services, from ideation to deployment,
              ensure seamless integration and lasting impact, keeping businesses
              ahead in a competitive landscape.
            </p>
            <div className="flex items-center gap-5">
              <ArrowButton
                direction="left"
                onClick={handlePrev}
                isEnd={index === 0}
              />
              <ArrowButton
                direction="right"
                onClick={handleNext}
                isEnd={index >= maxIndex}
              />
            </div>
          </div>

          {/* Logos Carousel */}
{/* Logos Carousel on Mobile (2 per row, with animation) */}
<div className="block sm:hidden w-full px-4 relative min-h-[220px]">
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={index} // unique key per slide state
      initial={{ opacity: 0, y: 10 }}     // enter from bottom
      animate={{ opacity: 1, y: 0 }}      // on show
      exit={{ opacity: 0, y: -10 }}       // exit to top
      transition={{ duration: 0.4 }}
      className="grid grid-cols-2 gap-4 absolute inset-0"
    >
      {activeClients.slice(index, index + logosPerPage).map((client, idx) => (
        <div
          key={`${client.name}-${idx}`}
          className="bg-white p-4 rounded-[17px] shadow-md w-full h-[100px] flex justify-center items-center"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-[40px] object-contain"
          />
        </div>
      ))}
    </motion.div>
  </AnimatePresence>
</div>


{/* Logos Carousel on Desktop (4 visible, scrollable) */}
<div className="hidden sm:block sm:absolute w-screen z-100 sm:h-[180px] px-6 overflow-hidden bottom-25">
  <div
    className="flex gap-6 transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${index * itemWidth}px)`,
      width: `${activeClients.length * itemWidth}px`,
    }}
  >
    {activeClients.map((client, idx) => (
      <div
        key={`${client.name}-${idx}`}
        className="bg-white p-6 rounded-[17px] shadow-md w-[250px] h-[140px] flex justify-center items-center shrink-0"
      >
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-[80px] object-contain"
        />
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Section3;
