import { faEdit, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../records/FilterComponent";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExaminations } from "../../actions/records/examinationAction";
import style from "../../Css/records/ViewRecord.module.css";
import { Link } from "react-router-dom";

const PillTable = (props) => {
  const PillTest = [
    {
      name: "panadol",
      shape: "oval",
      date: "sadasd",
      ingredient: "bla bla",
      color: "red",
      id: 3,
    },
    {
      name: "panadol",
      shape: "oval",
      date: "sadasd",
      ingredient: "bla bla",
      color: "red",
      id: 3,
    },
    {
      name: "panadol",
      shape: "oval",
      date: "sadasd",
      ingredient: "bla bla",
      color: "red",
      id: 3,
    },
  ];

  const columns = [
    {
      name: "Drug",
      selector: (row) => row.drug,
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
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Dr Name",
      selector: (row) => row.DrName,
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

  // return (
  //   <DataTable
  //     columns={columns}
  //     data={PillTest}
  //     defaultSortField="name"
  //     striped
  //     pagination
  //     subHeader
  //     subHeaderComponent={subHeaderComponent}
  //   />
  // );
  return (
    <div
      className={style.view}
      data-aos="zoom-in-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.view_header}>
            {/* {props.haveImage ? <img src={props.img} /> : null}
            {props.PageName} */}
          </div>
        </div>
        {/* {props.haveGraph ? (
          <div className={style.graph_link}>
            <Link to={props.graphLink}>
              <FontAwesomeIcon icon={faChartBar} /> Go to graph view
            </Link>
          </div>
        ) : null} */}
      </div>
      <div className={style.view_data}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              {/* <Link to={props.link} type="button" className="btn">
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link> */}
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.view_table}>
              <DataTable
                // columns={props.columns}
                // data={filteredItems}
                defaultSortField="name"
                striped
                pagination
                subHeader
                subHeaderComponent={subHeaderComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
PillTable.propTypes = {
  auth: PropTypes.object.isRequired,
  getExaminations: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  examination: state.examination,
});
export default connect(mapStateToProps, { getExaminations })(PillTable);
