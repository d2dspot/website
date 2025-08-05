import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";

import ButtonStar from "../buttons/ButtonStar";
import ButtonGradient from "../buttons/ButtonGradient";
import ButtonOutline from "../buttons/ButtonOutline";

import { serviceSections } from "@/assets/data";
import ServiceCard from "../cards/ServiceCard";

const Section5 = () => {
  const stickyRefs = {
    design: useRef(null),
    tech: useRef(null),
  };

  const designScroll = useScroll({
    target: stickyRefs.design,
    offset: ["start start", "end end"],
  });

  const techScroll = useScroll({
    target: stickyRefs.tech,
    offset: ["start start", "end end"],
  });

  const scrollProgressMap = {
    design: designScroll.scrollYProgress,
    tech: techScroll.scrollYProgress,
  };

  const [activeSection, setActiveSection] = useState("design");

  const handleScrollTo = (key) => {
    stickyRefs[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isDesignInView = useInView(stickyRefs.design, { margin: "-50% 0px -50% 0px" });
  const isTechInView = useInView(stickyRefs.tech, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isDesignInView) {
      setActiveSection("design");
    } else if (isTechInView) {
      setActiveSection("tech");
    }
  }, [isDesignInView, isTechInView]);

  return (
    <div className="relative bg-white px-4 sm:px-10 lg:px-28 sm:pt-16 sm:pb-32 flex flex-col items-center sm:gap-1">
      {/* Sticky Header (only on lg+) */}
      <motion.div className="sm:sticky top-0 z-10 bg-white w-full pb-6">
        <div className="flex flex-col items-center gap-4 mt-3 sm:mt-6">
          <ButtonStar>Our Services</ButtonStar>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-center leading-tight">
            End-to-End Brilliance in{" "}
            <span className="font-semibold text-primary">Every Build</span>
          </h2>
          <p className="text-base sm:text-lg text-center font-normal leading-loose max-w-2xl">
            We blend creative strategy and smart development to deliver real business outcomes.
          </p>

          {/* Tab Buttons (show only on sm+) */}
          <div className="w-full max-w-md hidden sm:flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            {activeSection === "design" ? (
              <>
                <ButtonGradient className="w-full" onClick={() => handleScrollTo("design")}>
                  Design Service
                </ButtonGradient>
                <ButtonOutline className="w-full" onClick={() => handleScrollTo("tech")}>
                  Tech Services
                </ButtonOutline>
              </>
            ) : (
              <>
                <ButtonOutline className="w-full" onClick={() => handleScrollTo("design")}>
                  Design Service
                </ButtonOutline>
                <ButtonGradient className="w-full" onClick={() => handleScrollTo("tech")}>
                  Tech Services
                </ButtonGradient>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Sections */}
      {["design", "tech"].map((sectionKey) => {
        const sectionData = serviceSections[sectionKey];
        const scrollYProgress = scrollProgressMap[sectionKey];
        const isFlipped = sectionKey === "tech";

        return (
          <div
            key={sectionKey}
            ref={stickyRefs[sectionKey]}
            className={` w-full  max-w-[1200px] flex flex-col sm:flex-row ${
              isFlipped ? "sm:flex-row-reverse" : ""
            } justify-between items-start gap-10 sm:mt-24 sm:scroll-mt-95`}
          >
            {/* Sticky Image on lg+ only */}
            <div className="w-full sm:w-[400px] lg:w-[48%] sm:sticky sm:top-110 lg:top-96 rounded-3xl border-2 border-primary p-3  flex sm:flex-row justify-center items-center">
              <div className="w-full  h-[300px] sm:h-[300px] lg:h-[500px]">
                <img
                  src={sectionData.image}
                  alt={`${sectionKey} section`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Cards */}
            <div className="w-full lg:w-[48%] flex flex-col gap-6">
              {sectionData.cards.map((card, i) => {
                const targetScale = 1 - (sectionData.cards.length - i) * 0.02;
                return (
                  <ServiceCard
                    key={i}
                    i={i}
                    {...card}
                    progress={scrollYProgress}
                    range={[
                      i / sectionData.cards.length,
                      (i + 1) / sectionData.cards.length,
                    ]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section5;
