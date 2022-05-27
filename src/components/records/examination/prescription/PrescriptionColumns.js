import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../../../Css/records/ViewRecord.module.css";
import { Link } from "react-router-dom";
import moment from "moment-timezone";

const columns = [
  {
    name: "Diagnosis",
    selector: (row) => row.examinationId.diagnosis,
    sortable: true,
  },
  {
    name: "Drug",
    selector: (row) => row.drugName,
    sortable: true,
    grow: 1,
    wrap: true,
  },
  {
    name: "Dose",
    selector: (row) => row.dose,
    sortable: true,
    wrap: true,
  },
  {
    name: "Date",
    selector: (row) => moment(row.examinationId.date).format("MMM-D-YYYY"),
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
