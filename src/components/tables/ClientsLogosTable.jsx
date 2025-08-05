import React, { useState } from "react";
import ReusableTable from "./ReusableTable";
import ButtonActive from "@/components/buttons/ButtonActive";
import { formatIsoDate } from "@/lib/utils";
import { FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import { clientLogo } from "@/assets/data";
import { TablecustomStyles } from "./TableCustomStyles";
import Dropdown from "../ui/Dropdown";
import Modal from "../layouts/Modal";
import DeletePopup from "../popUps/DeletePopup";
import AddLogoPopup from "../popUps/AddLogoPopup";

export default function ClientLogoTable({
  onRowSelect,
  paginationPerPage = 5,
}) {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const [modalType, setModalType] = useState(null); // 'delete' | 'edit' | 'add'
  const [selectedItems, setSelectedItems] = useState([]);

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
      name: "Image File",
      cell: (row) => (
        <img
          src={row.logo}
          alt={`${row.name} logo`}
          className="h-10 w-23 mx-auto"
        />
      ),
    },
    {
      name: "Client Name",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Posted By",
      selector: (row) => row.date,
      cell: (row) => formatIsoDate(row.date),
      sortable: true,
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
          <AddLogoPopup
            initialData={selectedItems[0]}
            onSave={(updatedItem) => {
              console.log("Edited item:", updatedItem); // This will now include image, name, status
              closeModal();
              // TODO: Send `updatedItem` to backend or state handler
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
      ? "Edit Client Logo"
      : "";

  return (
    <>
      <ReusableTable
        data={clientLogo}
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
