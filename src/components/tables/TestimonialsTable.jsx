import React, { useState } from "react";
import ReusableTable from "./ReusableTable";
import ButtonActive from "@/components/buttons/ButtonActive";
import { FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import { TablecustomStyles } from "./TableCustomStyles";
import Dropdown from "../ui/Dropdown";
import Modal from "../layouts/Modal";
import DeletePopup from "../popUps/DeletePopup";
import AddTestimonialPopup from "../popUps/AddTestimonialPopup";
import { testimonials as TestimonialData } from "@/assets/data";
import ButtonSimple from "../buttons/ButtonSimple";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";
import { Add, DocumentText, Eye } from "iconsax-reactjs";
import EditTagsPopup from "../popUps/EditTagsPopup";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ShowTestimonialPopup from "../popUps/ShowTestimonialPopup";

export default function TestimonialTable({
  onRowSelect,
  onTagsClick,
  onContentClick,
  paginationPerPage = 5,
}) {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [modalType, setModalType] = useState(null); // 'delete' | 'edit' | 'add' | 'editTags'
  const [selectedItems, setSelectedItems] = useState([]);
  const [editTags, setEditTags] = useState([]); // <--- for editing tags

  const openModal = (type, item) => {
  setSelectedItems([item]);
  setModalType(type);
  setOpenDropdownId(null);
};

  const closeModal = () => {
    setModalType(null);
    setSelectedItems([]);
  };

  const confirmDelete = (items) => {
    console.log("Confirmed Delete:", items);
    closeModal();
    // TODO: Handle delete logic here
  };

const columns = ({ handleRowUpdate }) => [
  {
    name: "Profile Image",
    cell: (row) => (
      <div className="flex justify-center items-center w-full">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
          <img
            src={row.image}
            alt={row.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    name: "User Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Company Name",
    selector: (row) => row.company,
    sortable: true,
  },
  {
  name: "Title",
    selector: (row) => row.title,
    sortable: true,
    wrap: true,
  },
  {
    name: "Testimonial",
    cell: (row) =>
      row.content ? (
        <ButtonSimple onClick={() => openModal("view", row)}>
      Open <DocumentText size={15} />
    </ButtonSimple>
      ) : (
        <ButtonSimpleFilled>
          <span>Add</span>
          <Add />
        </ButtonSimpleFilled>
      ),
  },
  {
    name: "Rating",
    cell: (row) => {
      const stars = Math.floor(row.stars);
      const hasHalf = row.stars % 1 >= 0.5;
      const empty = 5 - stars - (hasHalf ? 1 : 0);

      return (
        <div className="flex justify-center items-center gap-1 text-yellow-500">
          {[...Array(stars)].map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
          {hasHalf && <FaStarHalfAlt />}
          {[...Array(empty)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
        </div>
      );
    },
  },
  {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <ButtonActive
          active={row.status}
          onClick={() => handleRowUpdate(row.id, { status: !row.status })}
        />
      ),
    },
  {
    name: "Actions",
    cell: (row) => (
      <div className="relative inline-block text-center w-full">
        <button
          className="p-2 hover:bg-gray-200 rounded-full"
          onClick={() =>
            setOpenDropdownId(openDropdownId === row.title ? null : row.title)
          }
        >
          <FaEllipsisV className="text-gray-600" />
        </button>
        <Dropdown
          open={openDropdownId === row.title}
          className="-top-[100%] right-[100%] bg-[#F5F5FF] z-100"
          options={[
            {
              icon: FaEdit,
              text: "Edit",
              onClick: () => openModal("edit", row),
            },
            {
              icon: FaTrash,
              text: "Delete",
              onClick: () => openModal("delete", row),
            },
          ]}
        />
      </div>
    ),
    ignoreRowClick: true,
  },
];



const renderModalContent = () => {
  switch (modalType) {
    case "delete":
      return (
        <DeletePopup
          selectedItems={selectedItems}
          onDelete={confirmDelete}
          onCancel={closeModal}
        />
      );
    case "edit":
      return (
        <AddTestimonialPopup
          initialData={selectedItems[0]}
          onSave={(updatedItem) => {
            closeModal();
            // update logic
          }}
          onCancel={closeModal}
        />
      );
    case "view":
      return (
        <ShowTestimonialPopup
          testimonial={selectedItems[0]}
          onEdit={(item) => {
            setSelectedItems([item]);
            setModalType("edit");
          }}
          onClose={closeModal}
        />
      );
    case "editTags":
      return (
        <EditTagsPopup
          currentTags={editTags}
          onSave={(updatedTags) => {
            console.log("Updated Tags:", updatedTags);
            closeModal();
          }}
          onCancel={closeModal}
        />
      );
    default:
      return null;
  }
};


 const modalTitle =
  modalType === "delete"
    ? "Confirm Deletion"
    : modalType === "edit"
    ? "Edit Testimonial"
    : modalType === "view"
    ? "Testimonial Preview"
    : "";


  return (
    <>
      <ReusableTable
        data={TestimonialData}
        columns={columns}
        customStyles={TablecustomStyles}
        onRowSelect={onRowSelect}
        additionalProps={{ paginationPerPage }}
      />
      <Modal isOpen={!!modalType} onClose={closeModal} title={modalTitle}>
        {renderModalContent()}
      </Modal>
    </>
  );
}
