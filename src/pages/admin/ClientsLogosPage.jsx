import ClientsLogosTable from "@/components/tables/ClientsLogosTable";
import AddLogoPopup from "@/components/popUps/AddLogoPopup";
import { FaPlus } from "react-icons/fa";
import TablePageLayout from "@/components/layouts/TablePageLayout";

export default function ClientsLogosPage() {
  return (
    <TablePageLayout
      title="Clients Logos"
      TableComponent={ClientsLogosTable}
      AddEditPopup={AddLogoPopup}
      addLabel="Add Logo"
      deleteLabel="Delete Logo"
      addIcon={<FaPlus className="mr-2" />}
      onSave={(data, isEdit) => {
        if (isEdit) {
          // update logic for logo
        } else {
          // add logic for logo
        }
      }}
      onDelete={(rows) => {
        // delete logic for selected logos
      }}
    />
  );
}
