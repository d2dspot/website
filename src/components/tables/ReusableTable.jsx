import React, { useState } from "react";
import DataTable from "react-data-table-component";

export default function ReusableTable({
  data,
  columns, // columns: function({ handleRowUpdate })
  customStyles,
  selectable = true,
  onRowUpdate,
  onRowSelect,
  selectableRowsComponentProps,
  additionalProps = {},
}) {
  const [rows, setRows] = useState(
    data.map((item, idx) => ({ id: item.id ?? idx, ...item }))
  );
  const [selectedRows, setSelectedRows] = useState([]);

  // Update a row and notify parent if needed
  const handleRowUpdate = (id, patch) => {
    setRows(rs => rs.map(r => (r.id === id ? { ...r, ...patch } : r)));
    onRowUpdate?.(id, patch);
  };

  // Conditional styling for selected rows
  const conditionalRowStyles = [
    {
      when: row => selectedRows.some(r => r.id === row.id),
      style: { backgroundColor: "#f0f0fd" },
    },
  ];

  return (
    <DataTable
      columns={columns({ handleRowUpdate })}
      data={rows}
      selectableRows={selectable}
      highlightOnHover
      pointerOnHover
      pagination
      onSelectedRowsChange={({ selectedRows }) => {
        setSelectedRows(selectedRows);
        onRowSelect?.(selectedRows);
      }}
      conditionalRowStyles={conditionalRowStyles}
      selectableRowsComponentProps={
        selectableRowsComponentProps || {
          style: {
            width: 15,
            height: 15,
            accentColor: "#4b4efc",
            borderRadius: "10px",
            border: "2px solid #4b4efc",
          },
        }
      }
      customStyles={customStyles}
      {...additionalProps}
    />
  );
}
