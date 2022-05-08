import { faEdit, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../FilterComponent";
import PrescriptionView from "./PrescriptionView";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExaminations } from "../../../actions/records/examinationAction";
import { Link } from "react-router-dom";
import style from "../../../Css/records/ViewRecord.module.css";

const ExaminationTable = (props) => {
  const examTest = [
    {
      symptoms: "Hello",
      diagnosis: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
    {
      symptoms: "Hello",
      diagnosis: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 1,
    },
    {
      symptoms: "Hello",
      diagnosis: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
  ];
  const [modalShow, setModalShow] = React.useState(false);
  const [editShow, setEditShow] = React.useState(false);
  React.useEffect(() => {
    props.getExaminations();
  }, []);
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
            <span className={style.tooltiptext}>
              Click To Show Prescription
            </span>
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
      data={examTest}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};
ExaminationTable.propTypes = {
  auth: PropTypes.object.isRequired,
  getExaminations: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  examination: state.examination,
});
export default connect(mapStateToProps, { getExaminations })(ExaminationTable);
