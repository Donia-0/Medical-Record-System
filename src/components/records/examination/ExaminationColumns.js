import { faEdit, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrescriptionView from "./PrescriptionView";
import { Link } from "react-router-dom";
import style from "../../../Css/records/ViewRecord.module.css";

const columns = [
  {
    name: "Diagnosis",
    selector: (row) => row.diagnosis,
    sortable: true,
    grow: 2,
    wrap: true,
  },
  {
    name: "Symptoms",
    selector: (row) => row.symptoms,
    sortable: true,
    grow: 2,
    wrap: true,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Note",
    selector: (row) => row.note,
    sortable: true,
  },
  {
    name: "Dr Name",
    selector: (row) => row.DrName,
    sortable: true,
  },
  {
    name: "Prescription",
    button: true,
    ignoreRowClick: true,
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className={style.view_prescription_btn}>
          <span className={style.tooltiptext}>Click To Show Prescription</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              row.showModal = true;
              setModalShow(true);
            }}
          >
            <FontAwesomeIcon icon={faEye} />
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
        <div className={style.edit_delete_btns}>
          <div className={style.edit_btn}>
            <Link to={`./${row.id}`} type="button" className="btn">
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
