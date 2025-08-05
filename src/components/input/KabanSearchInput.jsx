import React, { useState } from "react";
import { SearchNormal } from "iconsax-reactjs";


const KabanSearchInput = ({
  placeholder = "Search Candidate Name",
  onClick,
}) => {
  const [value, setValue] = useState("");

  const handleIconClick = () => {
    if (typeof onClick === "function") {
      onClick(value);
    }
  };

  return (
    <div
      className="flex items-center justify-between h-[50px] px-5 rounded-[16px] border border-[#9B9DFD] "
      style={{ alignSelf: "stretch", outlineOffset: "-1px" }}
    >
      <input
        type="text"
        className="flex-1 bg-transparent text-[12px] font-normal leading-[18px] text-[#1F2937]  outline-none border-none"
        style={{ minWidth: 0 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <SearchNormal
      
        className="ml-2 cursor-pointer"
        onClick={handleIconClick}
      />
    </div>
  );
};

export default KabanSearchInput;
