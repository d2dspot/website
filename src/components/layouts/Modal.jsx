import React from 'react';
import { IoClose } from "react-icons/io5";

const Modal = ({ children, isOpen, onClose, title , className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-black/20">
      <div className="relative p-4">
        <div className={`relative bg-[#F5F5FF] rounded-3xl shadow-sm inline-block ${className}`}>
          {/* Modal Header */}
          <div className="flex items-center mx-auto justify-between p-4 md:p-6 border-b rounded-t w-[96%]">
            <h3 className="text-xl font-medium text-gray-900">{title}</h3>
            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200  rounded-lg text-sm w-8 h-8 flex justify-center items-center cursor-pointer"
              onClick={onClose}
            >
              <IoClose size={24} color="black" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 md:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
