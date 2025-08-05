// src/pages/ServicesListPage.jsx
import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ButtonSimpleFilled from "@/components/buttons/ButtonSimpleFilled";
import ButtonTab from "@/components/buttons/ButtonTab";
import { FaPlus } from "react-icons/fa";
import { serviceSections } from "@/assets/data";
import ServiceCardV2 from "@/components/cards/ServiceCardV2";
import Modal from "@/components/layouts/Modal";
import AddServicePopup from "@/components/popUps/AddServicePopup";

const ServicesListPage = () => {
  const [activeTab, setActiveTab] = useState("tech");
  const activeCards = serviceSections[activeTab]?.cards || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState(null);

  const [form, setForm] = useState({
    title: "",
    highlightText: "",
    description: "",
    currentPoint: "",
    pointsList: [],
    icons: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handlePointAdd = () => {
    const t = form.currentPoint.trim();
    if (t) {
      setForm((p) => ({
        ...p,
        pointsList: [...p.pointsList, t],
        currentPoint: "",
      }));
    }
  };

  const handlePointRemove = (i) =>
    setForm((p) => ({
      ...p,
      pointsList: p.pointsList.filter((_, idx) => idx !== i),
    }));

  const handleReset = () =>
    setForm({
      title: "",
      highlightText: "",
      description: "",
      currentPoint: "",
      pointsList: [],
      icons: "",
    });

  const handleSave = () => {
    console.log("Saved Service Data:", form);
    setIsModalOpen(false);
    handleReset();
  };

  return (
    <DashboardLayout activeMenu="Services List">
     
        {/* Header */}
        <div className="flex justify-between items-center shrink-0">
          <h1 className="text-gray-900 text-3xl font-medium">Services</h1>
          <ButtonSimpleFilled onClick={() => setIsModalOpen(true)}>
            <FaPlus /> Add Card
          </ButtonSimpleFilled>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-6 shrink-0">
          <ButtonTab
            label="Tech"
            isActive={activeTab === "tech"}
            onClick={() => setActiveTab("tech")}
          />
          <ButtonTab
            label="Design"
            isActive={activeTab === "design"}
            onClick={() => setActiveTab("design")}
          />
        </div>

        {/* Scrollable Cards Area */}
        <div className="mt-6 flex-1 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCards.map((card, idx) => (
              <ServiceCardV2
                key={idx}
                {...card}
                onEditClick={() => {
                  setEditForm({ ...card, currentPoint: "" });
                  setIsEditModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>

      {/* Add Service Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Service"
      >
        <AddServicePopup
          title={form.title}
          highlightText={form.highlightText}
          description={form.description}
          currentPoint={form.currentPoint}
          pointsList={form.pointsList}
          icons={form.icons}
          onChange={handleChange}
          onReset={handleReset}
          onSave={handleSave}
          onPointAdd={handlePointAdd}
          onPointRemove={handlePointRemove}
        />
      </Modal>

      {/* Edit Service Modal */}
      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditForm(null);
          }}
          title="Edit Service"
        >
          <AddServicePopup
            title={editForm?.title || ""}
            highlightText={editForm?.subtitle || ""}
            description={editForm?.description || ""}
            currentPoint={editForm?.currentPoint || ""}
            pointsList={editForm?.points || []}
            icons={editForm?.icon || ""}
            onChange={(e) =>
              setEditForm((p) => ({ ...p, [e.target.name]: e.target.value }))
            }
            onPointAdd={() => {
              if (editForm.currentPoint?.trim()) {
                setEditForm((p) => ({
                  ...p,
                  points: [...p.points, p.currentPoint.trim()],
                  currentPoint: "",
                }));
              }
            }}
            onPointRemove={(i) =>
              setEditForm((p) => ({
                ...p,
                points: p.points.filter((_, idx) => idx !== i),
              }))
            }
            onReset={() => setEditForm(null)}
            onSave={() => {
              console.log("Edited Service:", editForm);
              setIsEditModalOpen(false);
            }}
          />
        </Modal>
      )}
    </DashboardLayout>
  );
};

export default ServicesListPage;
