import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment-timezone";
import React, { useMemo } from "react";
import style from "../../../Css/records/ViewRecord.module.css";
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
          <div className={style.edit_delete_btns}>
            <div className={style.edit_btn}>
              <Link to={`./edit/${row._id}`} type="button" className="btn">
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </div>
            <div className={style.delete_btn}>
              <button type="button" className="btn">
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
