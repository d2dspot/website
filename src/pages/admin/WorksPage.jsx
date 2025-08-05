import WorksTable from "@/components/tables/WorksTable";
import AddWorkPopup from "@/components/popUps/AddWorkPopup";
import { FaPlus } from "react-icons/fa";
import TablePageLayout from "@/components/layouts/TablePageLayout";

export default function WorksPage() {
  return (
    <TablePageLayout
      title="Works"
      TableComponent={WorksTable}
      AddEditPopup={AddWorkPopup}
      addLabel="Add Works"
      deleteLabel="Delete Works"
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
