import React, { useState, useEffect } from "react";
import AdminInput from "../input/AdminInput";
import UploadImageInput from "../input/UploadImageInput";
import ButtonSimple from "../buttons/ButtonSimple";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";

const CATEGORY_OPTIONS = [
  { value: "", label: "Select Category" },
  { value: "uiux", label: "UI/UX" },
  { value: "development", label: "Development" },
  { value: "business", label: "Business" },
];

const AddBlogPopup = ({ onSave, onCancel, initialData }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  // Prefill for edit
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setCategory(initialData.category || "");
      setReadTime(initialData.readTime || initialData.timeline || "");
      setTags(initialData.tags || []);
      setTagInput("");
      setCoverImage(null); // always clear input
      // Accept either file or URL string for preview
      setCoverPreview(initialData.coverImage || initialData.coverimg || null);
    } else {
      // If switching to Add mode, clear all fields
      setTitle("");
      setCategory("");
      setReadTime("");
      setTags([]);
      setTagInput("");
      setCoverImage(null);
      setCoverPreview(null);
    }
  }, [initialData]);

  // Image change
  const handleImageChange = e => {
    const file = e.target.files[0];
    setCoverImage(file);
    if (file) setCoverPreview(URL.createObjectURL(file));
    else setCoverPreview(null);
  };

  // Add tag
  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };
  // Remove tag
  const handleRemoveTag = tagToRemove => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // Reset fields (to initial if editing, blank if adding)
  const handleReset = () => {
    if (initialData) {
      setTitle(initialData.title || "");
      setCategory(initialData.category || "");
      setReadTime(initialData.readTime || initialData.timeline || "");
      setTags(initialData.tags || []);
      setTagInput("");
      setCoverImage(null);
      setCoverPreview(initialData.coverImage || initialData.coverimg || null);
    } else {
      setTitle("");
      setCategory("");
      setReadTime("");
      setTags([]);
      setTagInput("");
      setCoverImage(null);
      setCoverPreview(null);
    }
  };

  // Save blog (add or edit)
  const handleSave = () => {
    if (!title || !category) return alert("Title & Category required");
    onSave?.({
      id: initialData?.id, // pass id if editing!
      title,
      category,
      readTime,
      tags,
      coverImage, // file (if changed), else use coverPreview (URL)
      coverPreview,
    });
    handleReset();
  };

  return (
    <div className="w-[648px] flex flex-col gap-6">
      <AdminInput
        label="Blog Title"
        name="blogTitle"
        placeholder="Enter the Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <AdminInput
        label="Category"
        name="category"
        type="select"
        value={category}
        onChange={e => setCategory(e.target.value)}
        options={CATEGORY_OPTIONS}
      />
      <AdminInput
        label="Read Time"
        name="readTime"
        placeholder="e.g. 5 Mins Read"
        value={readTime}
        onChange={e => setReadTime(e.target.value)}
      />

      {/* Tags */}
      <div className="w-full flex flex-col gap-2">
        <AdminInput
          label="Tags"
          name="tags"
          placeholder="Enter tags and press Add"
          value={tagInput}
          onChange={e => setTagInput(e.target.value)}
          type="addable"
          onIconClick={handleAddTag}
        />
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <div
                key={tag}
                className="px-3 py-1 rounded-full bg-primary text-white text-sm flex items-center gap-2"
              >
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="text-white hover:text-gray-200 ml-1 text-xs"
                  title="Remove"
                  type="button"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cover Image */}
      <UploadImageInput
        value={coverImage}
        preview={coverPreview}
        onChange={handleImageChange}
        label="Cover Image"
      />

      {/* Actions */}
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

export default AddBlogPopup;
