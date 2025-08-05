import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ButtonSimpleFilled from "@/components/buttons/ButtonSimpleFilled";
import ButtonSimple from "@/components/buttons/ButtonSimple";
import Modal from "@/components/layouts/Modal";
import DeletePopup from "@/components/popUps/DeletePopup";
import { motion, AnimatePresence } from "framer-motion";

export default function TablePageLayout({
  title,
  TableComponent,
  AddEditPopup,
  addLabel = "Add",
  deleteLabel = "Delete",
  addIcon,
  onSave,           // (data, isEdit) => void
  onDelete,         // (items) => void
  onRowSelect,      // (selectedRows) => void
  ...tableProps     // extra props for table
}) {
  const [modalType, setModalType] = useState(null); // "add" | "edit" | "delete"
  const [selectedRows, setSelectedRows] = useState([]);
  const [editData, setEditData] = useState(null);

  // Callbacks
  const handleSelectionDelete = (rows) => {
    setSelectedRows(rows);
    onRowSelect?.(rows);
  };

  const handleSave = (data) => {
    onSave?.(data, modalType === "edit");
    setModalType(null);
    setEditData(null);
  };

  const handleEdit = (rowData) => {
    setEditData(rowData);
    setModalType("edit");
  };

  const handleAdd = () => {
    setEditData(null);
    setModalType("add");
  };

  const handleDelete = (rows) => {
    onDelete?.(rows);
    setModalType(null);
    setSelectedRows([]);
  };
  
  return (
    <DashboardLayout activeMenu={title}>
      <div className="flex flex-col h-full overflow-hidden">
        {/* Header Row */}
        <div className="flex justify-between items-center h-[47px] mb-4">
          <h1 className="text-3xl font-medium">{title}</h1>
          <div className="flex gap-2">
            <AnimatePresence>
              {selectedRows.length > 0 && (
                <motion.div
                  key="delete-btn"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="inline-block"
                >
                  <ButtonSimple
                    onClick={() => setModalType("delete")}
                    className="border-red-500 text-red-500"
                  >
                    {deleteLabel}
                  </ButtonSimple>
                </motion.div>
              )}
            </AnimatePresence>
            <ButtonSimpleFilled onClick={handleAdd} className="px-5 py-2">
              {addIcon} {addLabel}
            </ButtonSimpleFilled>
          </div>
        </div>

        {/* Scrollable Table Area */}
        <div className=" flex-1 min-h-0 overflow-auto">
          <div>

          <TableComponent
            onRowSelect={handleSelectionDelete}
            paginationPerPage={15}
            onEdit={handleEdit}
            {...tableProps}
            />
            </div>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal
        isOpen={!!modalType}
        onClose={() => {
          setModalType(null);
          setEditData(null);
        }}
        title={
          modalType === "add"
            ? addLabel
            : modalType === "edit"
            ? `Edit ${addLabel.replace("Add ", "")}`
            : deleteLabel
        }
      >
        {modalType === "add" || modalType === "edit" ? (
          <AddEditPopup
            onSave={handleSave}
            onCancel={() => {
              setModalType(null);
              setEditData(null);
            }}
            initialData={editData}
          />
        ) : modalType === "delete" ? (
          <DeletePopup
            selectedItems={selectedRows}
            onDelete={handleDelete}
            onCancel={() => setModalType(null)}
          />
        ) : null}
      </Modal>
    </DashboardLayout>
  );
}
