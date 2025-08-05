export const TablecustomStyles = {
  tableWrapper: {
    style: {
      borderRadius: "10px",
      overflow: "hidden",
      border: "none",
      fontFamily: "Inter, sans-serif",
    },
  },
  table: {
    style: {
      borderRadius: "10px 10px 0 0",
      overflow: "hidden",
      backgroundColor: "#F5F5FF",
    },
  },
  headRow: {
    style: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
  headCells: {
    style: {
      flex: "1 0 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FAFAFA",
      padding: "16px 12px",
      gap: "24px",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    },
  },
  rows: {
    style: {
      display: "flex",
      justifyContent: "space-evenly",
      backgroundColor: "#F5F5FF",
      borderRadius: "10px",
      // overflow: "hidden",
    },
    highlightOnHoverStyle: { backgroundColor: "#f0f0fd" },
  },
  cells: {
    style: {
      flex: "1 0 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px 1px",
      border: "none",
      gap: "24px",
      backgroundColor: "inherit",
    },
  },
  pagination: {
    style: {
      borderRadius: "0 0 10px 10px",
      overflow: "hidden",
    },
  },
};
