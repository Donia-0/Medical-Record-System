import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment-timezone";
import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
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
      selector: (row) =>
        moment(row.date).format("yyyy-MM-DD") +
        " at " +
        moment(row.date).format("hh:mm A"),

      sortable: true,
    },
    {
      name: "Note",
      selector: (row) => row.note || "There  is no note",
      grow: 2,
      wrap: true,
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
                to={`./${row.id}`}
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
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

export default Bloodptable;
