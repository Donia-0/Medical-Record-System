import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import dateFormat from "../../../utils/dateFormat";
import FilterComponent from "../FilterComponent";

const Bloodptable = (props) => {
  const columns = [
    {
      name: "Systolic",
      selector: (row) => row.systolic,
      sortable: true,
    },
    {
      name: "Diastolic",
      selector: (row) => row.diastolic,
      sortable: true,
    },
    {
      name: "Pulse",
      selector: (row) => row.pulse,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => dateFormat(row.date),
      sortable: true,
    },
    {
      name: "Note",
      selector: (row) => row.note || "There  is no note",
      grow: 2,
      wrap: true,
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Bloodptable;
