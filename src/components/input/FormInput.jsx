import React from "react";

const FormInput = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-sm sm:text-base font-medium text-blue-950 font-['Poppins'] leading-tight"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          h-10 sm:h-11 px-2 sm:px-3 py-2 
          bg-indigo-600/20 rounded-lg 
          outline-none  focus:outline-2 focus:outline-primary/40 
          backdrop-blur-[5.70px] 
          text-blue-950 text-sm sm:text-base font-normal font-['Poppins'] 
          leading-snug placeholder:text-blue-950
          ${className}
        `}
      />
    </div>
  );
};

export default FormInput;
