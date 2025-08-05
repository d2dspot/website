// Column.jsx
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { AnimatePresence, motion } from "framer-motion";
import { SortableItem } from "./SortableItem";
import { Add } from "iconsax-reactjs";
import ScheduleCard from "../cards/ScheduleCard";

const Column = ({
  id,
  items,
  placeholderIndex,
  placeholderData,
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="w-[350px]  bg-[#F5F5FF] rounded-4xl p-6 "
    >
      {/* Header */}
      <div className="rounded-xl outline-2 outline-primary bg-white p-4 flex items-center justify-between">
        <h3 className="text-[15px] font-bold flex items-center gap-2">
          {id}
          <span className="text-xs text-primary bg-primary/10 rounded-full w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        </h3>
        <Add size={22} />
      </div>

      {/* Items & Placeholder */}
      <div className="flex flex-col gap-3 mt-4">
        <AnimatePresence initial={false}>
          {items.map((item, idx) => (
            <React.Fragment key={item.id}>
              {/* placeholder slot */}
              {idx === placeholderIndex && placeholderData && (
                <motion.div
                  key="pl-" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <ScheduleCard data={placeholderData} placeholder />
                </motion.div>
              )}

              {/* real card with layout animation */}
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
              >
                <SortableItem
                  id={item.id}
                  data={item}
                  containerId={id}
                />
              </motion.div>
            </React.Fragment>
          ))}

          {/* placeholder at end-of-column */}
          {placeholderIndex === items.length && placeholderData && (
          <motion.div>
              <ScheduleCard data={placeholderData} placeholder />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Column;
