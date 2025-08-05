// KanbanBoard.jsx
import React, { useState, useMemo } from "react";
import {
  DndContext,
  pointerWithin,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Column from "./Column";
import { SortableItem } from "./SortableItem";

const KanbanBoard = ({ initialColumns }) => {
  const [columns, setColumns] = useState(initialColumns);
  const [activeId, setActiveId] = useState(null);
  const [overId, setOverId] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const findContainer = (id) =>
    Object.keys(columns).find((key) =>
      columns[key].some((item) => item.id === id)
    );

  const getItemById = (id) =>
    Object.values(columns).flat().find((item) => item.id === id);

  const handleDragStart = ({ active }) => {
    if (active.id !== activeId) {
      setActiveId(active.id);
    }
  };

  const handleDragOver = ({ over }) => {
    const nextOverId = over?.id ?? null;
    if (nextOverId !== overId) {
      setOverId(nextOverId);
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      if (activeId !== null) setActiveId(null);
      if (overId !== null) setOverId(null);
      return;
    }

    const sourceCol = findContainer(active.id);
    const destCol = findContainer(over.id) ?? over.id;
    const activeItem = getItemById(active.id);

    if (!sourceCol || !destCol || !activeItem) {
      if (activeId !== null) setActiveId(null);
      if (overId !== null) setOverId(null);
      return;
    }

    // Same‑column reorder
    if (sourceCol === destCol) {
      const items = [...columns[sourceCol]];
      const oldIndex = items.findIndex((i) => i.id === active.id);

      let newIndex = items.findIndex((i) => i.id === over.id);
      // dropping onto the column container → move to end
      if (over.id === sourceCol) {
        newIndex = items.length - 1;
      }

      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        setColumns((prev) => ({
          ...prev,
          [sourceCol]: arrayMove(items, oldIndex, newIndex),
        }));
      }

    // Cross‑column move
    } else {
      setColumns((prev) => {
        const sourceItems = [...prev[sourceCol]];
        const rawDest = [...prev[destCol]];

        // remove from source
        const srcIdx = sourceItems.findIndex((i) => i.id === active.id);
        sourceItems.splice(srcIdx, 1);

        // remove any existing copy in dest
        const destItems = rawDest.filter((i) => i.id !== active.id);

        // compute insertion index
        let overIdx = destItems.findIndex((i) => i.id === over.id);
        if (over.id === destCol) {
          overIdx = destItems.length;
        }
        const insertAt = overIdx >= 0 ? overIdx : destItems.length;

        destItems.splice(insertAt, 0, { ...activeItem, group: destCol });

        return {
          ...prev,
          [sourceCol]: sourceItems,
          [destCol]: destItems,
        };
      });
    }

    if (activeId !== null) setActiveId(null);
    if (overId !== null) setOverId(null);
  };

  const handleDragCancel = () => {
    if (activeId !== null) setActiveId(null);
    if (overId !== null) setOverId(null);
  };

  const activeItem = activeId ? getItemById(activeId) : null;

  return (
      <div className="flex gap-6 p-6 min-w-max">
        <DndContext
          sensors={sensors}
          collisionDetection={pointerWithin}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          {Object.entries(columns).map(([colId, items]) => {
            const filtered = activeId
              ? items.filter((i) => i.id !== activeId)
              : items;

            let placeholderIndex = -1;
            if (overId) {
              if (overId === colId) {
                placeholderIndex = filtered.length;
              } else if (findContainer(overId) === colId) {
                placeholderIndex = filtered.findIndex((i) => i.id === overId);
              }
            }

            const itemIds = useMemo(
              () => filtered.map((i) => i.id),
              [filtered]
            );

            return (
              <SortableContext
                key={colId}
                items={itemIds}
                strategy={verticalListSortingStrategy}
              >
                <Column
                  id={colId}
                  items={filtered}
                  placeholderIndex={placeholderIndex}
                  placeholderData={activeItem}
                />
              </SortableContext>
            );
          })}

          <DragOverlay>
            {activeId && (
              <SortableItem id={activeId} data={activeItem} dragOverlay />
            )}
          </DragOverlay>
        </DndContext>
      </div>
  );
};

export default KanbanBoard;
