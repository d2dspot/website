import React from "react";
import AdminInput from "../input/AdminInput";
import ButtonSimple from "../buttons/ButtonSimple";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";
import { IoCloseCircleOutline } from "react-icons/io5";

const AddServicePopup = ({
  title,
  highlightText,
  description,
  currentPoint,
  pointsList = [],
  icons,
  onChange,
  onReset,
  onSave,
  onPointAdd,
  onPointRemove,
}) => {
  return (
    <div className="w-[648px] p-6 inline-flex flex-col justify-start items-center gap-6 overflow-hidden">
      <AdminInput
        label="Service Title"
        name="title"
        placeholder="Enter the Title"
        value={title}
        onChange={onChange}
      />
      <AdminInput
        label="Highlight Text"
        name="highlightText"
        placeholder="Enter the Company"
        value={highlightText}
        onChange={onChange}
      />
      <AdminInput
        label="Description"
        name="description"
        placeholder="Enter the Company"
        value={description}
        onChange={onChange}
      />

      {/* Add Point Input */}
      <AdminInput
  label="Points"
  name="currentPoint"
  placeholder="Enter Services Point"
  value={currentPoint}
  onChange={onChange}
  type="addable"
  onIconClick={onPointAdd}
/>


      {/* Points Display */}
      {pointsList.length > 0 && (
  <div className="self-stretch flex flex-wrap gap-2 w-[100%]">
    {pointsList.map((point, index) => (
      <div
        key={index}
        className="px-3 py-1 bg-primary rounded-[20px] text-white text-sm inline-flex items-center gap-2"
      >
        {point}
        <IoCloseCircleOutline
          size={18}
          className="cursor-pointer"
          onClick={() => onPointRemove(index)}
        />
      </div>
    ))}
  </div>
)}


      <AdminInput
        label="Icons"
        name="icons"
        placeholder="Enter Icon Info"
        value={icons}
        onChange={onChange}
      />

      {/* Buttons */}
      <div className="w-full max-w-[296px] flex justify-start items-center gap-3">
        <ButtonSimple onClick={onReset} className="w-full px-6 py-3" childClassName="text-sm">
          Reset
        </ButtonSimple>
        <ButtonSimpleFilled onClick={onSave} className="w-full px-6 py-3" childClassName="text-sm">
          Save
        </ButtonSimpleFilled>
      </div>
    </div>
  );
};

export default AddServicePopup;
