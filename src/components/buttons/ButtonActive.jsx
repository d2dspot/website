// src/components/buttons/ButtonActive.jsx
import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ButtonActive = ({ active = false, onClick }) => {
  const outlineColor = active ? 'outline-green-300' : 'outline-red-300';
  const textColor    = active ? 'text-green-500'  : 'text-red-500';
  const Icon         = active ? FaCheckCircle      : FaTimesCircle;
  const label        = active ? 'Active'           : 'Inactive';

  return (
    <div 
      onClick={onClick} 
      className="inline-flex items-center cursor-pointer"
    >
      <div
        className={`
          flex justify-center  w-full items-center px-3 py-1 bg-white rounded-3xl 
           outline-1 ${outlineColor}
           gap-1
        `}
      >
        <span className={`text-xs font-medium leading-[20px] ${textColor}`}>
          {label}
        </span>
        <Icon className={`w-3 h-3  ${textColor}`} />
      </div>
    </div>
  );
};

export default ButtonActive;
