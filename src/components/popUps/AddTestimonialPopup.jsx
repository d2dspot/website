import React, { useState, useEffect } from "react";
import AdminInput from "../input/AdminInput";
import UploadImageInput from "../input/UploadImageInput";
import ButtonSimple from "../buttons/ButtonSimple";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";
import { showErrorToast } from "@/lib/Toast";

const AddTestimonialPopup = ({ onSave, onCancel, initialData }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [stars, setStars] = useState(5);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Prefill for edit
  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setCompany(initialData.company || "");
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setStars(initialData.stars ?? 5);
      setProfileImage(null);
      setPreviewImage(initialData.image || null);
    } else {
      setName("");
      setCompany("");
      setTitle("");
      setContent("");
      setStars(5);
      setProfileImage(null);
      setPreviewImage(null);
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(file ? URL.createObjectURL(file) : null);
  };

  const handleReset = () => {
    if (initialData) {
      setName(initialData.name || "");
      setCompany(initialData.company || "");
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setStars(initialData.stars ?? 5);
      setProfileImage(null);
      setPreviewImage(initialData.image || null);
    } else {
      setName("");
      setCompany("");
      setTitle("");
      setContent("");
      setStars(5);
      setProfileImage(null);
      setPreviewImage(null);
    }
  };

  const handleSave = () => {
    if (!name || !company || !content) {
      showErrorToast("All fields are required.", "Missing Fields");
      return;
    }

    if (stars < 0 || stars > 5) {
      showErrorToast("Rating must be between 0 and 5", "Invalid Rating");
      return;
    }

    onSave?.({
      id: initialData?.id,
      name,
      company,
      title,
      content,
      stars,
      image: profileImage,
      previewImage,
    });

    handleReset();
  };

  return (
    <div className="w-[648px] flex flex-col gap-6">
        <div className="flex flex-row gap-2">

      <AdminInput
        label="User Name"
        name="name"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <AdminInput
        label="Company Name"
        name="company"
        placeholder="Enter company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        />
        </div>
      <AdminInput
        label="Title"
        name="title"
        placeholder="Enter testimonial title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <AdminInput
        type="textarea"
        rows={4}
        label="Testimonial Content"
        name="content"
        placeholder="Write the testimonial here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <AdminInput
        label="Rating (0 to 5)"
        name="stars"
        type="number"
        min="0"
        max="5"
        step="0.5"
        value={stars}
        onChange={(e) => setStars(parseFloat(e.target.value))}
      />

      <UploadImageInput
        value={profileImage}
        preview={previewImage}
        onChange={handleImageChange}
        label="Profile Image"
      />

      <div className="w-72 flex mx-auto justify-end gap-4 mt-4">
        <ButtonSimple className="flex-1" onClick={handleReset}>
          Reset
        </ButtonSimple>
        <ButtonSimpleFilled className="flex-1" onClick={handleSave}>
          Save
        </ButtonSimpleFilled>
      </div>
    </div>
  );
};

export default AddTestimonialPopup;
