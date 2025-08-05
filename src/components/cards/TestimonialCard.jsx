import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import triangle from "/assets/triangle.svg";

const TestimonialCard = ({ title, content, name, company, image, stars = 5 }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex-1 flex flex-col  gap-3  sm:w-full  max-w-[575px] sm:h-[357px]">
      {/* Card Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 sm:p-8 bg-violet-50 rounded-tl-xl rounded-tr-xl rounded-br-xl flex flex-col justify-start items-center gap-3">
          <div className="text-lg sm:text-xl font-medium font-['Poppins'] leading-relaxed self-stretch text-left text-primary">
            {title}
          </div>
          <div className="text-sm sm:text-base text-blue-950 font-normal leading-snug self-stretch text-left">
            {content}
          </div>
        </div>
        <img src={triangle} alt="triangle" className="w-10 h-5 sm:w-12 sm:h-6" />
      </div>

      {/* Footer Section */}
      <div className="flex items-center gap-4 sm:gap-8 px-4 sm:px-0">
        <img
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          src={image}
          alt={name}
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="text-blue-950 text-base sm:text-xl font-normal font-['Poppins'] leading-normal tracking-tight">
              {name}
            </div>
            <div className="text-gray-500 text-xs sm:text-sm font-normal font-['Poppins'] leading-none">
              | {company}
            </div>
          </div>
          <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5 mr-1" />}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={`empty-${i}`} className="text-orange-300 w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
