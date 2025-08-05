import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonStar from "../buttons/ButtonStar";
import TestimonialCard from "../cards/TestimonialCard";
import ArrowButton from "../buttons/ButtonArrow";
import { testimonials } from "@/assets/data";
import useResponsiveCards from "@/hooks/useResponsiveCards";

// Testimonial data

const Section7 = ({className}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [exitDirection, setExitDirection] = useState("left");
  const cardsPerPage = useResponsiveCards();
  const handleNext = () => {
    if (index + cardsPerPage < testimonials.length) {
      setExitDirection(direction === "left" ? "left" : "right");
      setDirection("right");
      setIndex(index + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (index - cardsPerPage >= 0) {
      setExitDirection(direction === "right" ? "right" : "left");
      setDirection("left");
      setIndex(index - cardsPerPage);
    }
  };

  const currentCards = testimonials.slice(index, index + cardsPerPage);

  return (
  <div className={`w-full ${className} px-2 py-5 sm:px-28 sm:py-16 flex flex-col items-center gap-1`}>
      <div className="w-full  sm:w-[1200px] flex flex-col  items-center gap-3 sm:gap-12">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row justify-center  sm:justify-between items-center sm:items-end ">
          <div className="  w-full sm:w-[793px] flex flex-col items-center sm:items-start gap-1 sm:gap-6 ">
            <ButtonStar>Testimonials</ButtonStar>
            <div className="text-xl sm:text-5xl leading-[64px] font-['Poppins']">
              <span className="text-slate-900 font-normal">Hear From Our </span>
              <span className="font-semibold text-primary">Valued Clients</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <ArrowButton
              direction="left"
              onClick={handlePrev}
              isEnd={index === 0}
            />
            <ArrowButton
              direction="right"
              onClick={handleNext}
              isEnd={index + cardsPerPage >= testimonials.length}
            />
          </div>
        </div>

        {/* Animated Cards */}
        <div className="w-full my-5  sm:h-96 relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: exitDirection === "right" ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full sm:absolute sm:top-0 sm:left-0  flex  sm:gap-12 justify-center "
            >
              {currentCards.map((testimonial) => (
                <div key={testimonial.name} className="flex justify-center h-fit sm:h-full flex-1  ">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Section7;
