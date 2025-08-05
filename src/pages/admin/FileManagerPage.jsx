import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import KabanSearchInput from "@/components/input/KabanSearchInput";
import ButtonSimple from "@/components/buttons/ButtonSimple";
import ButtonSimpleFilled from "@/components/buttons/ButtonSimpleFilled";
import { FilterSquare, Add } from "iconsax-reactjs";
import { folders } from "@/assets/data";
import MediaCard from "@/components/cards/MediaCard";

const FileManagerPage = () => {
  const navigate = useNavigate();

  const applyFilter = () => console.log("Filter applied");

  return (
    <DashboardLayout activeMenu="File Manager">
      <div className="flex flex-col h-full min-h-0 overflow-hidden">
        {/* Top Header */}
        <div className="w-full px-3 mb-6 inline-flex justify-between items-center shrink-0">
          <div className="text-gray-900 text-3xl font-medium leading-9">File Manager</div>

          <div className="w-[701px] flex justify-start items-center gap-3">
            <div className="flex-1">
              <KabanSearchInput
                placeholder="Search File Name"
                buttonText="Search"
                onSearch={applyFilter}
              />
            </div>

            <ButtonSimple
              className="h-12 px-5 rounded-xl flex items-center gap-2"
              onClick={applyFilter}
            >
              <FilterSquare /> Filter
            </ButtonSimple>

            <ButtonSimpleFilled onClick={() => {}} className="px-6 py-3 rounded-[12px]">
              <Add /> Add New File
            </ButtonSimpleFilled>
          </div>
        </div>

        {/* ✅ Scrollable Folder Grid */}
        <div className="flex-1 min-h-0 overflow-auto px-3 flex flex-wrap gap-4 ">
          {folders.map((item) => (
            <MediaCard
              key={item.id}
              data={item}
              title={item.title}
              type={item.type}
              imagePreview={item.imagePreview}
              onClick={() => navigate(`/admin/file-folder/${item.id}`)}
              onEdit={(data) => console.log("Edit:", data)}
              onDelete={(data) => console.log("Delete:", data)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FileManagerPage;
