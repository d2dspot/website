import React, { useState } from "react";
import ButtonStar from "../buttons/ButtonStar";
import SearchInput from "../input/SearchInput";
import ButtonArrow from "../buttons/ButtonArrow";
import { programs } from "@/assets/data";

const Section5 = () => {
  const [index, setIndex] = useState(0);
  const cardsPerPage = 4;

  const handleSearch = (value) => {
    console.log("Searching for:", value);
  };

  const handleNext = () => {
    if (index + cardsPerPage < programs.length) {
      setIndex(index + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (index - cardsPerPage >= 0) {
      setIndex(index - cardsPerPage);
    }
  };

  const currentCards = programs.slice(index, index + cardsPerPage);

  return (
    <section className="w-full bg-[#F3F3FF] px-4 sm:px-6 lg:px-10 xl:px-20 py-10 sm:py-16 flex justify-center">
      <div className="w-full sm:max-w-[1440px] flex flex-col gap-6 sm:gap-12 items-center">
        {/* Header */}
        <div className="w-full flex flex-col gap-6">
          <ButtonStar>Explore Programs</ButtonStar>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl text-[#0F172A] font-normal">
              Your Path to AI Mastery{" "}
              <span className="font-semibold text-transparent bg-[radial-gradient(ellipse_110.72%_79.22%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)] bg-clip-text">
                Starts Here.
              </span>
            </h2>
            <SearchInput onSearch={handleSearch} />
          </div>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {currentCards.map((prog, idx) => (
            <div
              key={idx}
              className="bg-[#F8F8FF] border border-[#C3C3C3] rounded-2xl sm:rounded-[26px] p-3 sm:p-6 flex flex-col gap-3 sm:gap-6"
            >
              <img
                src={prog.img}
                alt={prog.title}
                className="w-full h-[150px] sm:h-[280px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-base sm:text-xl font-semibold text-[#183B56]">{prog.title}</h3>
                <p className=" text-[13px] sm:text-sm text-[#6D6D6D] leading-relaxed">{prog.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-4 justify-center pt-6">
          <ButtonArrow direction="left" onClick={handlePrev} isEnd={index === 0} />
          <ButtonArrow
            direction="right"
            onClick={handleNext}
            isEnd={index + cardsPerPage >= programs.length}
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
