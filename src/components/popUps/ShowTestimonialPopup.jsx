import React from "react";
import ButtonSimpleFilled from "../buttons/ButtonSimpleFilled";
import ButtonSimple from "../buttons/ButtonSimple";

const ShowTestimonialPopup = ({ testimonial, onEdit, onClose }) => {
  if (!testimonial) return null;

  return (
    <div className="w-[640px] p-6 flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-medium text-primary mb-2">{testimonial.title}</h2>
        <p className="text-sm text-gray-500">{testimonial.content}</p>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <ButtonSimpleFilled onClick={() => onEdit(testimonial)}>
          Edit
        </ButtonSimpleFilled>
        <ButtonSimple className="" onClick={onClose}>
          Close
        </ButtonSimple>
      </div>
    </div>
  );
};

export default ShowTestimonialPopup;
