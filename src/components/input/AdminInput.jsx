import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaPlus, FaChevronDown } from "react-icons/fa";

const AdminInput = ({
  label = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  onIconClick = () => {},
  options = [],
  rows = 4,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const isPassword = type === "password";
  const isAddable = type === "addable";
  const isSelect = type === "select";
  const isTextarea = type === "textarea";

  return (
    <div className="w-full">
      <div className="relative w-full flex">
        {/* Label */}
        <label
          htmlFor={name}
          className="absolute w-fit px-2 text-xs sm:text-sm text-slate-500 mb-1 -top-3 left-2.5 bg-violet-50 z-10"
        >
          {label}
        </label>

        {/* Select */}
        {isSelect ? (
          <div className="relative w-full">
            <select
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              className="w-full appearance-none px-4 py-3 pr-12 rounded-md bg-primary-50 text-sm sm:text-base font-poppins text-neutral-900 outline-2 outline-primary/60 focus:ring-2 focus:ring-primary focus:shadow-md focus:shadow-primary/30"
              style={{ backgroundColor: "#F5F5FF" }}
              {...rest}
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <FaChevronDown className="text-primary" />
            </span>
          </div>

        // Textarea
        ) : isTextarea ? (
          <textarea
            id={name}
            
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className="w-full px-4 py-3 rounded-md bg-primary-50 text-sm sm:text-base font-poppins text-neutral-900 outline-2 outline-primary/60 focus:ring-2 focus:ring-primary focus:shadow-md focus:shadow-primary/30 placeholder:text-slate-500 resize-none"
            {...rest}
          />

        // Input / Password
        ) : (
          <input
            id={name}
            name={name}
            type={isPassword ? (showPassword ? "text" : "password") : "text"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-3 pr-12 rounded-md bg-primary-50 text-sm sm:text-base font-poppins text-neutral-900 outline-2 outline-primary/60 focus:ring-2 focus:ring-primary focus:shadow-md focus:shadow-primary/30 placeholder:text-slate-500"
            {...rest}
          />
        )}

        {/* Password Toggle */}
        {isPassword && (
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={togglePassword}
          >
            {showPassword ? (
              <FaRegEye size={18} className="text-primary" />
            ) : (
              <FaRegEyeSlash size={18} className="text-slate-400" />
            )}
          </span>
        )}

        {/* Addable Icon */}
        {isAddable && (
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={onIconClick}
          >
            <FaPlus size={20} className="text-white bg-primary rounded-full p-1" />
          </span>
        )}
      </div>
    </div>
  );
};

export default AdminInput;
