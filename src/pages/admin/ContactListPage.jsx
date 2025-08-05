import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { scheduleData } from "@/assets/data";
import KanbanBoard from "@/components/kaban/KabanBoard";
import ButtonSimpleFilled from "@/components/buttons/ButtonSimpleFilled";
import ButtonSimple from "@/components/buttons/ButtonSimple";
import { Add, FilterSquare } from "iconsax-reactjs";
import KabanSearchInput from "@/components/input/KabanSearchInput";
import Modal from "@/components/layouts/Modal";
import AppointmentPopup from "@/components/popUps/AppointmentPopup";

// utility to group by any key (defaults to "group")
const groupBy = (items, key = "group") =>
  items.reduce((acc, item) => {
    const grp = item[key] || "Ungrouped";
    acc[grp] = acc[grp] || [];
    acc[grp].push(item);
    return acc;
  }, {});

const SchedulePage = () => {
  // state for the grouped columns
  const [columns, setColumns] = useState(groupBy(scheduleData));
  // a simple key that changes on each filter to remount the board
  const [filterKey, setFilterKey] = useState("");
  // modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // reads the search box, filters or resets the data, and bumps the key
  const applyFilter = () => {
    const inputEl = document.querySelector(
      'input[placeholder="Search Candidate Name"]'
    );
    const term = inputEl?.value.trim().toLowerCase() || "";

    if (!term) {
      // restore full board
      setColumns(groupBy(scheduleData));
      setFilterKey(""); // blank key = unfiltered
    } else {
      // only names containing the sequence
      const filtered = scheduleData.filter((item) =>
        item.name.toLowerCase().includes(term)
      );
      setColumns(groupBy(filtered));
      setFilterKey(term);
    }
  };

  return (
    <DashboardLayout activeMenu="Contact List">
      <div className="w-[80vw] font-manrope h-full  overflow-hidden ">
        <div className="w-full px-3 inline-flex justify-between items-center">
          {/* Left Heading */}
          <div className="justify-start text-gray-900 text-3xl font-medium leading-9">
            Contact List
          </div>

          {/* Right Side */}
          <div className="w-[701px] self-stretch flex justify-start items-center gap-3">
            {/* Search Input */}
            <div className="flex-1">
              <KabanSearchInput
                title="Search Candidate Name"
                buttonText="Search"
                onSearch={applyFilter}
              />
            </div>

            {/* Filter Button */}
            <div>
              <ButtonSimple
                className="h-12 px-5 rounded-xl flex items-center gap-2"
                onClick={applyFilter}
              >
                <FilterSquare /> Filter
              </ButtonSimple>
            </div>

            {/* Add New Button */}
            <div>
              <ButtonSimpleFilled
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-[12px]"
              >
                <Add /> Add New Candidate
              </ButtonSimpleFilled>
            </div>
          </div>
        </div>

        {/* Kanban Board: key={filterKey} forces a remount on each filter */}
        <div className="flex-1 min-h-0 h-[calc(100vh-235px)]  overflow-auto">
           

          <KanbanBoard
            key={filterKey}
            initialColumns={columns}
            />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Appointment Details"
        className="bg-white w-[477px] mx-auto"
      >
        <AppointmentPopup />
      </Modal>
    </DashboardLayout>
  );
};

export default SchedulePage;
