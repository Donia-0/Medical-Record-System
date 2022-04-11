
import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import PrescriptionView from "./PrescriptionView";

const ExaminationTable = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const buttonPres = () => {
    return (
      <div className="view-prescription-btn">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setModalShow(true)}
        >
          view
        </button>
        <PrescriptionView show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    );
  };

  const columns = [
    {
      name: "Symptoms",
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: "Diagnosis",
      selector: (row) => row.email,
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: "Date",
      selector: (row) => row.website,
      sortable: true,
    },
    {
      name: "Note",
      selector: (row) => row.company.name,
      sortable: true,
    },
    {
      name: "Dr Name",
      selector: (row) => row.address.city,
      sortable: true,
    },
    {
      name: "Prescription",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,
      cell: buttonPres,
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


  export default ExaminationTable