import React, { useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";

const UploadImageInput = ({
  value,
  onChange,
  preview,
  label = "Upload Logo",
}) => {
  const fileInput = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e) => {
    if (onChange) onChange(e);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && onChange) {
      const syntheticEvent = { target: { files: [file] } };
      onChange(syntheticEvent);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col gap-3 mt-2">
      <div className="text-gray-700 text-base font-medium">{label}</div>

      <div
        className={`flex flex-col items-center justify-center transition rounded-xl border-2 border-dashed cursor-pointer
          ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-neutral-50"}
          ${preview ? "p-4" : "px-5 py-6"}`}
        onClick={() => fileInput.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div
          className={`relative overflow-hidden flex items-center justify-center rounded-lg 
            ${preview ? "w-[200px] h-[120px]" : "w-[100px] h-[50px]"}`}
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-contain rounded-lg shadow-md"
            />
          ) : (
            <BsUpload className="text-3xl text-slate-300" />
          )}
        </div>

        {!preview && (
          <div className="flex flex-col w-[118px] gap-2 items-center justify-center mt-2">
            <div className="bg-indigo-500 rounded-lg px-3 py-2 text-white text-sm font-semibold mb-1 text-nowrap w-fit">
              Add Image
            </div>
            <div className="text-gray-400 text-xs text-center">
              or drop image to upload
            </div>
          </div>
        )}

        <input
          id="logo-upload"
          ref={fileInput}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default UploadImageInput;
