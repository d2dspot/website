import React, { useState, useEffect } from "react";
import AdminInput from "../input/AdminInput";
import ButtonSimple from "../buttons/ButtonSimple";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";

const EditTagsPopup = ({ currentTags = [], onSave, onCancel }) => {
  const [tags, setTags] = useState(currentTags);
  const [tagInput, setTagInput] = useState("");

  // Reset to currentTags if popup reopens
  useEffect(() => {
    setTags(currentTags);
    setTagInput("");
  }, [currentTags]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleEditTags = () => {
    onSave(tags);
  };

  return (
    <div className="w-[648px] flex flex-col gap-6">
      <div className="text-xl font-semibold mb-2">Edit Tags</div>
      <AdminInput
        label="Add Tag"
        name="tags"
        placeholder="Enter tag and press Add"
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
      <div className="flex gap-4 mt-4 justify-end">
        <ButtonSimple onClick={onCancel}>Cancel</ButtonSimple>
        <ButtonSimpleFilled onClick={handleEditTags}>Save</ButtonSimpleFilled>
      </div>
    </div>
  );
};

export default EditTagsPopup;
