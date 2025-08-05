import React, { useState } from "react";
import ReusableTable from "./ReusableTable";
import ButtonActive from "@/components/buttons/ButtonActive";
import { FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import { TablecustomStyles } from "./TableCustomStyles";
import Dropdown from "../ui/Dropdown";
import Modal from "../layouts/Modal";
import DeletePopup from "../popUps/DeletePopup";
import AddBlogPopup from "../popUps/AddBlogPopup";
import { blogData } from "@/assets/data";
import ButtonSimple from "../buttons/ButtonSimple";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";
import { Add, DocumentText, Eye } from "iconsax-reactjs";
import EditTagsPopup from "../popUps/EditTagsPopup";
import { useNavigate } from "react-router-dom";

export default function BlogTable({
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
  const openEditTagsModal = (row) => {
    setSelectedItems([row]);
    setEditTags(row.tags || []);
    setModalType("editTags");
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

  const navigate = useNavigate();
  const handleContentClick = (content = "") => {
    navigate("/admin/editor", {
      state: { content, backPath: "/admin/blogs", title: "Blog" },
    });
  };

  const columns = ({ handleRowUpdate }) => [
    {
      name: "Cover Image",
      cell: (row) => (
        <img
          src={row.coverimg}
          alt={row.title}
          className="h-10 w-16 object-cover rounded"
        />
      ),
      // No width or minWidth here!
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      wrap: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Timeline",
      selector: (row) => row.timeline,
      sortable: true,
    },
    {
      name: "Tags",
      cell: (row) =>
        row.tags?.length > 0 ? (
          <>
            <ButtonSimpleFilled onClick={() => openEditTagsModal(row)}>
              Show <Eye />
            </ButtonSimpleFilled>
          </>
        ) : (
          <ButtonSimple onClick={() => openEditTagsModal(row)}>
            Add <Add />
          </ButtonSimple>
        ),
    },

    {
      name: "Content",
      cell: (row) =>
        row.content ? (
          <ButtonSimple onClick={() => handleContentClick(row.content)}>
            Open <DocumentText size={15} />
          </ButtonSimple>
        ) : (
          <ButtonSimpleFilled onClick={() => handleContentClick("")}>
            <span>Add</span>
            <Add />
          </ButtonSimpleFilled>
        ),
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
        <div className="relative inline-block">
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            onClick={() =>
              setOpenDropdownId(openDropdownId === row.id ? null : row.id)
            }
          >
            <FaEllipsisV className="text-gray-600" />
          </button>
          <Dropdown
            open={openDropdownId === row.id}
            className="-top-[100%] right-[100%]  bg-[#F5F5FF] z-100"
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
          <AddBlogPopup
            initialData={selectedItems[0]}
            onSave={(updatedItem) => {
              closeModal();
              // update logic
            }}
            onCancel={closeModal}
          />
        );
      case "editTags":
        return (
          <EditTagsPopup
            currentTags={editTags}
            onSave={(updatedTags) => {
              // TODO: update tags in your data
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
      ? "Edit Blog"
      : "";

  return (
    <>
      <ReusableTable
        data={blogData}
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
