import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItemCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="w-full px-4 py-3 sm:p-5 border-b border-gray-300 flex flex-col transition-all duration-300 cursor-pointer"
    >
      {/* Question + Icon */}
      <div className="flex justify-between items-start w-full">
        <p className="text-sm sm:text-base font-medium text-Color-3 font-['Poppins'] leading-normal text-left">
          {question}
        </p>
        <div className="text-slate-400 flex-shrink-0">
          {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
        </div>
      </div>

      {/* Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out max-w-full sm:max-w-[1076px] ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        {answer && (
          <p className="text-sm sm:text-base font-normal text-Color-3 font-['Poppins'] leading-relaxed">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQItemCard;
