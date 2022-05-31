import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../Css/records/ViewRecord.module.css";
import { Link } from "react-router-dom";
import moment from "moment-timezone";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Shape",
    selector: (row) => row.shape,
    sortable: true,
    grow: 1,
    wrap: true,
  },
  {
    name: "Color",
    selector: (row) => row.color,
    sortable: true,
    wrap: true,
  },
  {
    name: "Date",
    selector: (row) => moment(row.date).format("MMM-D-YYYY"),
    sortable: true,
  },

  {
    name: "Ingredient",
    selector: (row) => row.ingredient,
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
