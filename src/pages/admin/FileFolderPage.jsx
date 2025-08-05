import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Add, ArrowDown2, Calendar, Grid2 } from "iconsax-reactjs";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import MediaCard from "@/components/cards/MediaCard";
import { folderContents } from "@/assets/data";
import ButtonSimpleFilled from "@/components/buttons/ButtonSimpleFilled";
import KabanSearchInput from "@/components/input/KabanSearchInput";
import DetailAsideCard from "@/components/cards/DetailAsideCard";
import Modal from "@/components/layouts/Modal";
import FileViewPopup from "@/components/popUps/FileViewPopup";
import DeletePopup from "@/components/popUps/DeletePopup";

const FileFolderPage = () => {
  const { folderId } = useParams();
  const navigate = useNavigate();
  const files = folderContents[folderId] || [];

  const [selectedFile, setSelectedFile] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");
  const [previewFileData, setPreviewFileData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);

  const folderName = folderId
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const toggleSortOrder = () =>
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));

  const sortedFiles = [...files].sort((a, b) => {
    const timeA = new Date(a.createdAt);
    const timeB = new Date(b.createdAt);
    return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
  });

  const applyFilter = () => {};

  return (
    <DashboardLayout activeMenu="File Manager">
      <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
        {/* Violet Header */}
        <div className="self-stretch p-4 bg-[#F5F5FF] rounded-2xl shadow-[0px_4px_8px_0px_rgba(183,183,183,0.20)] inline-flex flex-col justify-start items-center gap-3 mb-4">
          <div className="self-stretch px-3 inline-flex justify-between items-center">
            {/* Left Section */}
            <div className="self-stretch flex justify-start items-center gap-3">
              <div className="text-gray-900 text-3xl font-medium leading-9">
                {folderName}
              </div>
              <div className="w-0 h-11 border-1 border-zinc-400 rounded-full"></div>
              <div
                className="cursor-pointer text-primary hover:underline text-lg font-normal"
                onClick={() => navigate("/admin/file-manager")}
              >
                Back to File Manager
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-row justify-start items-center gap-3 flex-nowrap">
              <div
                className="p-3 rounded-xl inline-flex items-center gap-2 cursor-pointer"
                onClick={toggleSortOrder}
              >
                <Calendar size={16} />
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                </span>
                <ArrowDown2
                  size={20}
                  className={`transform transition-transform ${
                    sortOrder === "oldest" ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div className="p-3 rounded-xl inline-flex items-center gap-2 cursor-pointer">
                <Grid2 size={16} />
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  Grid View
                </span>
                <ArrowDown2 size={20} />
              </div>

              <ButtonSimpleFilled className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2">
                <Add size={18} />
                <span>Upload File</span>
              </ButtonSimpleFilled>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex w-full flex-row items-start gap-6 min-h-0 flex-1">
          {/* Left Side - Search and Cards */}
          <div className="flex-1 flex flex-col bg-[#F5F5FF] p-4 gap-6 rounded-2xl min-h-0 h-full overflow-hidden">
            <KabanSearchInput
              placeholder="Search File Name"
              buttonText="Search"
              onSearch={applyFilter}
            />

<div className="flex flex-wrap items-start content-start gap-4 px-3 overflow-auto">
             
              {sortedFiles.map((item) => (
                <MediaCard
                  key={item.id}
                  data={item}
                  title={item.title}
                  type={item.type}
                  imagePreview={item.imagePreview}
                  onEdit={(data) => console.log("Edit:", data)}
                  onDeleteRequest={(file) => setDeleteModalData(file)}
                  onPreviewRequest={(file) => setPreviewFileData(file)}
                  onClick={() => setSelectedFile(item)}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`w-80 flex-shrink-0 transform transition-transform duration-500 ease-in-out ${
              selectedFile ? "translate-x-0 block" : "translate-x-full absolute"
            }`}
          >
            {selectedFile && (
              <DetailAsideCard
                title={selectedFile.title}
                dateModified={selectedFile.createdAt}
                imageUrl={selectedFile.imagePreview}
                fileUrl={
                  selectedFile.videoPreview ||
                  selectedFile.imagePreview ||
                  selectedFile.fileUrl ||
                  ""
                }
                fileType={selectedFile.type}
                onEdit={() => console.log("Edit clicked")}
                onDelete={() => {
                  setDeleteModalData(selectedFile);
                  setSelectedFile(null);
                }}
                onClose={() => setSelectedFile(null)}
                onPreviewRequest={() => setPreviewFileData(selectedFile)}
              />
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteModalData && (
          <Modal
            isOpen={!!deleteModalData}
            onClose={() => setDeleteModalData(null)}
            title="Confirm Deletion"
            className="w-[500px]"
          >
            <DeletePopup
              selectedItems={[deleteModalData]}
              onCancel={() => setDeleteModalData(null)}
              onDelete={(items) => {
                console.log("Delete confirmed", items);
                setDeleteModalData(null);
              }}
            />
          </Modal>
        )}

        {/* Fullscreen Preview Modal */}
        {previewFileData && (
          <Modal
            isOpen={!!previewFileData}
            onClose={() => setPreviewFileData(null)}
            title={`Viewing: ${previewFileData.title}`}
            className="w-[90vw] max-w-5xl"
          >
            <FileViewPopup
              fileType={previewFileData.type}
              fileUrl={
                previewFileData.videoPreview ||
                previewFileData.imagePreview ||
                previewFileData.fileUrl ||
                ""
              }
              imageUrl={previewFileData.imagePreview}
              title={previewFileData.title}
            />
          </Modal>
        )}
      </div>
    </DashboardLayout>
  );
};

export default FileFolderPage;
