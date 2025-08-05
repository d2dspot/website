import React from 'react';

const ButtonTab = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-28 flex flex-col items-center gap-3 pb-2 border-b-3 text-sm font-semibold justify-start 
        ${isActive ? ' border-b-primary text-gray-900' : 'border-b-transparent text-zinc-400'}
      `}
    >
      {label}
    </button>
  );
};

export default ButtonTab;
