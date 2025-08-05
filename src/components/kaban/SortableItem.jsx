// src/kanban/SortableItem.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ScheduleCard from "../cards/ScheduleCard";

export function SortableItem({
  id,
  data,
  containerId,
  dragOverlay = false,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, data: { containerId } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: dragOverlay ? "grabbing" : "default", // No grab for full card
    opacity: !dragOverlay && isDragging ? 0.2 : 1,
    ...(dragOverlay && {
      boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
      rotate: "5deg",
      zIndex: 999,
    }),
  };

  return (
    <div ref={setNodeRef} style={style} className="rounded-3xl">
      <ScheduleCard
        data={data}
        dragListeners={!dragOverlay ? listeners : {}}
        dragAttributes={!dragOverlay ? attributes : {}}
      />
    </div>
  );
}
