import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment-timezone";
import React, { useMemo } from "react";
import style from "../../../Css/records/ViewRecord.module.css";
import { Link } from "react-router-dom";
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

export default columns;
