import React, { useState } from "react";
import searchIcon from "/assets/search.svg";
import ButtonGradient from "../buttons/ButtonGradient";

const SearchInput = ({ title = "Search", buttonText = "Search", onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    onSearch?.(inputValue);
  };

  return (
    <div className="w-full max-w-md h-auto sm:h-[61px] px-3 py-2 sm:py-1.5 bg-white rounded-[10px] border border-slate-300 flex flex-nowrap justify-between items-center gap-2 overflow-hidden">
      {/* Input with Icon */}
      <div className="flex flex-1 items-center gap-3 min-w-0">
        <img src={searchIcon} alt="Search" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <input
          type="text"
          placeholder={title}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-transparent outline-none placeholder:text-slate-500 text-sm sm:text-lg font-normal w-full"
        />
      </div>

      {/* Button */}
      <div className="w-fit sm:w-32 h-11 sm:h-12 flex-shrink-0">
        <ButtonGradient className="w-full h-full" onClick={handleClick}>
          {buttonText}
        </ButtonGradient>
      </div>
    </div>
  );
};

export default SearchInput;
