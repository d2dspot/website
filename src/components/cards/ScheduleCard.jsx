// src/cards/ScheduleCard.jsx
import React, { useState, useRef, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";
import Dropdown from "../ui/Dropdown";
import Modal from "../layouts/Modal";
import DeletePopup from "../popUps/DeletePopup";


const ScheduleCard = ({
  data,
  onViewProfile = () => {},
  onEdit = () => {},
  onDelete = () => {},
  placeholder = false,
  dragListeners = {},
  dragAttributes = {},
}) => {
  const { name, email, phone, profileImg } = data;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dotsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dotsRef.current && !dotsRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownOptions = [
    {
      icon: FaEdit,
      text: "Edit",
      onClick: () => {
        onEdit(data);
        setIsDropdownOpen(false);
      },
    },
    {
      icon: FaTrash,
      text: "Delete",
      onClick: () => {
        setShowDeleteModal(true);
        setIsDropdownOpen(false);
      },
    },
  ];

  return (
    <div
      className={`w-full sm:w-[302px] p-6 bg-white rounded-3xl
        shadow-[0px_4px_8px_0px_rgba(183,183,183,0.20)]
        inline-flex flex-col justify-start items-start gap-4
        select-none relative
        ${placeholder ? "opacity-50 pointer-events-none" : ""}
      `}
    >
      {/* 🔘 Drag Handle at top center */}
      <div
        {...dragAttributes}
        {...dragListeners}
        className="absolute top-2 left-2 z-20 cursor-grab"
        title="Drag"
      >
        <MdDragIndicator className="text-gray-400 hover:text-gray-600" size={20} />
      </div>

      {/* Header */}
      <div className="w-full sm:max-w-[210px] flex flex-row justify-start items-start gap-3">
        <div className="w-9 h-9">
          <img
            className="object-fill rounded-full"
            src={profileImg}
            alt="profile"
          />
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="text-gray-900 text-sm font-semibold">{name}</div>
          <div className="text-slate-400 text-xs font-normal">{email}</div>
          <div className="text-slate-400 text-xs font-normal leading-tight">
            {phone}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="inline-flex justify-between items-start gap-5 w-full relative">
        <div className="flex-1 h-6 flex justify-start items-center gap-5">
          <ButtonSimpleFilled
            onClick={(e) => {
              e.stopPropagation();
              console.log("View Profile clicked");
              onViewProfile();
            }}
          >
            View Profile
          </ButtonSimpleFilled>
        </div>

        {/* Dropdown Menu */}
        <div ref={dotsRef} className="relative z-10">
          <BsThreeDots
            className="size-6 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Three dots icon clicked");
              setIsDropdownOpen((prev) => !prev);
            }}
          />
          <Dropdown
            open={isDropdownOpen}
            options={dropdownOptions}
            className="top-10 left-1/2 -translate-x-1/2 bg-[#FAFAFA]"
          />
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Confirm Deletion"
        className="w-[500px]"
      >
        <DeletePopup
          selectedItems={[data]}
          onCancel={() => setShowDeleteModal(false)}
          onDelete={(items) => {
            onDelete(items[0]);
            setShowDeleteModal(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ScheduleCard;
