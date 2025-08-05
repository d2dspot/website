import React, { useState } from "react";
import FAQItemCard from "../cards/FAQItemCard";
import ButtonStar from "../buttons/ButtonStar";
import SearchInput from "../input/SearchInput";
import ButtonGradient from "../buttons/ButtonGradient";
import { IoIosArrowDown } from "react-icons/io";
import { faqItems } from "@/assets/data";

const Section3 = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const filteredItems = faqItems.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm) ||
      (faq.answer && faq.answer.toLowerCase().includes(searchTerm))
  );

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="w-full lg:w-[1440px] mx-auto px-4 sm:px-6 lg:px-36 py-3 sm:py-12 flex flex-col items-center gap-8 bg-white ">
      {/* Header */}
      <div className="w-full flex flex-col  sm:items-start gap-4 ">
        <div className="inline-flex sm:justify-start justify-center items-center  gap-2">
          <ButtonStar>FAQ</ButtonStar>
        </div>

        {/* Title and Search */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 flex flex-col gap-2 lg:w-[710px] w-full text-3xl sm:text-4xl lg:text-5xl font-['Poppins'] leading-tight lg:leading-[64px]">
            <span className="text-Foundation-Neutral-900 font-normal text-center sm:text-left">
              Frequently Asked{" "}
            </span>
            <span className="text-center sm:text-left font-semibold text-primary">Questions</span>
          </div>

          <div className="w-full sm:w-[360px]">
            <SearchInput
              title="Search Question"
              buttonText="Search"
              onSearch={(value) => {
                setSearchTerm(value.toLowerCase());
                setVisibleCount(6);
              }}
            />
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="w-full flex flex-col items-start gap-5">
        {visibleItems.length > 0 ? (
          visibleItems.map((faq, idx) => (
            <FAQItemCard key={idx} question={faq.question} answer={faq.answer} />
          ))
        ) : (
          <p className="text-gray-400 font-['Poppins']">No results found.</p>
        )}
      </div>

      {/* Load More */}
      {visibleCount < filteredItems.length && (
        <ButtonGradient onClick={handleLoadMore}>
          Load More <IoIosArrowDown size={20} className="ml-2" />
        </ButtonGradient>
      )}
    </div>
  );
};

export default Section3;
