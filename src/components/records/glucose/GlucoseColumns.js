import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import style from "../../../Css/records/ViewRecord.module.css";
import { Link } from "react-router-dom";
import dateFormat from "./../../../utils/dateFormat";

const columns = (onClick) => [
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true,
  },
  {
    name: "Result",
    selector: (row) => row.result,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => dateFormat(row.date),
    sortable: true,
  },
  {
    name: "Note",
    selector: (row) => row.note,
    sortable: true,
    grow: 1,
    wrap: true,
  },
  {
    name: "Action",
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      return localStorage.patientId ? (
        "not authorized for edit or delete"
      ) : (
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <Link to={`./edit/${row._id}`} type="button" className="btn">
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          </div>
          <div className={style.delete_btn}>
            <button
              onClick={() => {
                onClick(row._id);
              }}
              type="button"
              className="btn"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      );
    },
  },
];

export default columns;
