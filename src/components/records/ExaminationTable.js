import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const ExaminationTable = (props) => {
  const columns = [
    {
      name: "Symptoms",
      selector: "name",
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: "Diagnosis",
      selector: "email",
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: "Date",
      selector: "website",
      sortable: true,
    },
    {
      name: "Note",
      selector: "company.name",
      sortable: true,
    },
    {
      name: "Dr Name",
      selector: "address.city",
      sortable: true,
    },
    {
      name: "Prescription",
      button: true,
      cell: (row) => (
        <>
          <div className="view-prescription-btn">
            <button type="button" className="btn btn-primary">
              view
            </button>
          </div>
        </>
      ),
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

export default ExaminationTable;
