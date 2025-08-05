import TestimonialsTable from "@/components/tables/TestimonialsTable";
import AddTestimonialPopup from "@/components/popUps/AddTestimonialPopup";
import { FaPlus } from "react-icons/fa";
import TablePageLayout from "@/components/layouts/TablePageLayout";

export default function TestimonialsPage() {
  return (
    <TablePageLayout
      title="Testimonials"
      TableComponent={TestimonialsTable}
      AddEditPopup={AddTestimonialPopup}
      addLabel="Add Testimonials"
      deleteLabel="Delete Testimonials"
      addIcon={<FaPlus className="mr-2" />}
      onSave={(data, isEdit) => {
        if (isEdit) {
          // update
        } else {
          // add
        }
      }}
      onDelete={(rows) => {/* delete logic */}}
    />
  );
}
