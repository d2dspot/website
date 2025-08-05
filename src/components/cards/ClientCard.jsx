import React from "react";
const ClientCard = ({ img }) => {
  return (
    <div className="  flex flex-col justify-center items-center h-[50px] sm:h-[104px] sm:min-w-[230px] py-1 px-2  sm:py-2.5 sm:px-3.5">
      <img
        src={img}
        alt="client logo"
        className="w-[70%] sm:w-full   object-contain "
      />
    </div>
  );
};
export default ClientCard;
