import React from "react";
import { motion, AnimatePresence } from "framer-motion";


const Dropdown = ({ open, options = [], className = "" }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute bg-[#F5F5FF] rounded-lg shadow-lg py-2 w-40 z-50 ${className}`}
        >
          {options.map(({ icon: Icon, text, onClick }, idx) => (
            <button
              key={idx}
              onClick={onClick}
              className="w-full px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-[#FAFAFA] cursor-pointer "
            >
              <Icon className="text-base" /> {text}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
