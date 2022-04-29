import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import PrescriptionView from "./PrescriptionView";
import RequestAccessPatient from "../RequestAccessPatient";
import EditExamination from "./examination/EditExamination";
import { Link } from "react-router-dom";

const ExaminationTable = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [editShow, setEditShow] = React.useState(false);

  const columns = [
    {
      name: "Systolic",
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
      cell: (row) => {
        return (
          <div className="view-prescription-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                row.showModal = true;
                setModalShow(true);
              }}
            >
              view
            </button>
            {row.showModal ? (
              <PrescriptionView
                show={modalShow}
                onHide={() => {
                  row.showModal = false;

                  setModalShow(false);
                }}
              />
            ) : null}
          </div>
        );
      },
    },
    {
      name: "Action",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className="edit-delete-btns">
            <div className="edit-btn">
              <Link
                to="/records/editExamination"
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              {/* <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  row.showModal = true;
                  setEditShow(true);
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              {row.showModal ? (
                <EditExamination
                  show={editShow}
                  onHide={() => {
                    row.showModal = false;

                    setEditShow(false);
                  }}
                />
              ) : null} */}
            </div>
            <div className="delete-btn">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {}}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        );
      },
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
