import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "symptoms",
    headerName: "Symptoms",
    width: 300,
  },
  {
    field: "dignoses",
    headerName: "Dignoses",
    width: 200,
  },
  {
    field: "drName",
    headerName: "Dr Name",
    width: 200,
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "note",
    headerName: "Note",
    width: 200,
  },
  {
    field: "pres",
    headerName: "Prescription",
    width: 200,
  },
];

const rows = [];

export default function ExaminationTable() {
  return (
    <div style={{ height: 531, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick
        disableColumnMenu
      />
    </div>
  );
}
