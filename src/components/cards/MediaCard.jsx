import React, { useState, useRef, useEffect } from "react";
import { More, FolderCloud } from "iconsax-reactjs";
import {
  FaFileCode,
  FaFileImage,
  FaPlay,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { BsFillFileEarmarkRichtextFill } from "react-icons/bs";
import Dropdown from "../ui/Dropdown";
import Modal from "../layouts/Modal";
import DeletePopup from "../popUps/DeletePopup";

const typeToIcon = {
  folder: FolderCloud,
  video: FaPlay,
  code: FaFileCode,
  document: BsFillFileEarmarkRichtextFill,
  image: FaFileImage,
  default: BsFillFileEarmarkRichtextFill,
};

const MediaCard = ({
  data,
  title,
  type = "folder",
  imagePreview = null,
  onEdit = () => {},
  onDelete = () => {},
  onClick = () => {},
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dropdownRef = useRef();
  const IconComponent = typeToIcon[type] || typeToIcon.default;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
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
        setOpenDropdown(false);
      },
    },
    {
      icon: FaTrash,
      text: "Delete",
      onClick: () => {
        setShowDeleteModal(true);
        setOpenDropdown(false);
      },
    },
  ];

  return (
    <div
      className="w-[268px] h-fit relative bg-slate-50 rounded-2xl  inline-flex flex-col justify-start items-start  cursor-pointer"
      onClick={onClick}
    >
      {/* Media Preview */}
      <div className="self-stretch inline-flex justify-center rounded-t-2xl items-start overflow-hidden">
        {type === "image" && imagePreview ? (
          <div className="w-full h-[128px] object-contain flex justify-center items-center overflow-hidden">
            <img
              src={imagePreview}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : type === "video" && data.videoPreview ? (
          <video
            src={data.videoPreview}
            className="w-full h-[128px] object-cover"
            preload="metadata"
          />
        ) : (
          <div className="size-16 m-8 rounded-lg flex justify-center items-center overflow-hidden">
            <IconComponent
              size="64"
              color={type === "folder" ? "#000000" : "#9CA3AF"}
            />
          </div>
        )}
      </div>

      <div className=" w-full">
        {/* Footer */}
        <div
          className="self-stretch px-3 py-2 bg-white border-t border-slate-200 flex justify-between items-center rounded-b-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Title with truncation */}
          <div className="text-slate-800 font-semibold font-manhold text-sm leading-tight flex-1 truncate">
            {title}
          </div>

          {/* Dropdown */}
          <div className="relative z-20 ml-2 flex-shrink-0" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown((prev) => !prev);
              }}
              className="p-1 rounded hover:bg-gray-100"
            >
              <More size="20" color="#111827" />
            </button>

            <Dropdown
              open={openDropdown}
              options={dropdownOptions}
              className="bg-[#FAFAFA] top-6 left-1/2 -translate-x-1/2"
            />
          </div>
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

export default MediaCard;
