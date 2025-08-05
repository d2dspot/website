import React, { useState, useEffect } from "react";
import AdminInput from "../input/AdminInput";
import UploadImageInput from "../input/UploadImageInput";
import ButtonSimple from "../buttons/ButtonSimple";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";
import { showErrorToast } from "@/lib/Toast";

const AddWorkPopup = ({ onSave, onCancel, initialData }) => {
  const [workTitle, setWorkTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState("");
  const [timeline, setTimeline] = useState("");
  const [liveURLLink, setLiveURLLink] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setWorkTitle(initialData.workTitle || "");
      setCompanyName(initialData.companyName || "");
      setCategory(initialData.category || "");
      setTimeline(initialData.timeline || "");
      setLiveURLLink(initialData.liveURLLink || "");
      setContent(initialData.content || "");
      setCoverImage(null);
      setPreviewImage(initialData.coverimg || null);
    } else {
      resetFields();
    }
  }, [initialData]);

  const resetFields = () => {
    setWorkTitle("");
    setCompanyName("");
    setCategory("");
    setTimeline("");
    setLiveURLLink("");
    setContent("");
    setCoverImage(null);
    setPreviewImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setPreviewImage(file ? URL.createObjectURL(file) : null);
  };

  const handleSave = () => {
    if (!workTitle || !companyName || !category || !timeline || !liveURLLink || !content) {
      showErrorToast("All fields are required.", "Missing Fields");
      return;
    }

    const newData = {
      id: initialData?.id,
      workTitle,
      companyName,
      category,
      timeline,
      liveURLLink,
      content,
      coverimg: coverImage,
      previewImage,
      tags: initialData?.tags || [],
      status: initialData?.status ?? false,
    };

    onSave?.(newData);
    resetFields();
  };

  return (
    <div className="w-[648px] flex flex-col gap-6">
      <div className="flex flex-row gap-2">
        <AdminInput
          label="Work Title"
          name="workTitle"
          placeholder="Enter work title"
          value={workTitle}
          onChange={(e) => setWorkTitle(e.target.value)}
        />
        <AdminInput
          label="Company Name"
          name="companyName"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-2">
        <AdminInput
          label="Category"
          name="category"
          placeholder="e.g. Agriculture, Logistics"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <AdminInput
          label="Timeline"
          name="timeline"
          placeholder="e.g. Jan 2024 - Jun 2024"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
        />
      </div>
      <AdminInput
        label="Live URL Link"
        name="liveURLLink"
        placeholder="https://example.com"
        value={liveURLLink}
        onChange={(e) => setLiveURLLink(e.target.value)}
      />
      <AdminInput
        type="textarea"
        rows={4}
        label="Work Description"
        name="content"
        placeholder="Write the work details here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <UploadImageInput
        value={coverImage}
        preview={previewImage}
        onChange={handleImageChange}
        label="Cover Image"
      />
      <div className="w-72 flex mx-auto justify-end gap-4 mt-4">
        <ButtonSimple className="flex-1" onClick={resetFields}>
          Reset
        </ButtonSimple>
        <ButtonSimpleFilled className="flex-1" onClick={handleSave}>
          Save
        </ButtonSimpleFilled>
      </div>
    </div>
  );
};

export default AddWorkPopup;
