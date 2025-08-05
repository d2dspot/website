import BlogsTable from "@/components/tables/BlogsTable";
import AddBlogPopup from "@/components/popUps/AddBlogPopup";
import { FaPlus } from "react-icons/fa";
import TablePageLayout from "@/components/layouts/TablePageLayout";

export default function BlogsPage() {
  return (
    <TablePageLayout
      title="Blogs"
      TableComponent={BlogsTable}
      AddEditPopup={AddBlogPopup}
      addLabel="Add Blog"
      deleteLabel="Delete Blog"
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
