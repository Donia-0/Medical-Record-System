import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import FilterModal from "./../FilterModal";
import data from "../data";
import { Link } from "react-router-dom";
import style from "../../../Css/records/ViewRecord.module.css";
import Table from "./../Table";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { faEdit, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import PrescriptionView from "./PrescriptionView";
import { getExaminations } from "../../../actions/records/examinationAction";
const Examination = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);
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
  const { examinations } = props.examination.Examination;

  useEffect(() => {
    props.getExaminations();
  }, []);
  return (
    <div className="examination">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.examination_filter}>
            <div className={style.examination_filter_header}>Examination</div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className={style.examination_filer_button}>
                  <button
                    className="btn-primary"
                    onClick={() => setModalShow(true)}
                  >
                    <FontAwesomeIcon icon={faFilter} /> Add filter
                  </button>

                  <FilterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={style.view_data}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              <Link
                to="./addExamination"
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div>
              <ExaminationTable data={data} click={clickhandler} />
            </div>
          </div>
        </div>
      </div> <div className={style.view_data}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              <Link
                to="./addExamination"
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div>
              <ExaminationTable data={data} click={clickhandler} />
            </div>
          </div>
        </div>
      </div> */}
      <Table
        link="./addexamination"
        columns={columns}
        data={examinations}
        click={clickhandler}
      />
    </div>
  );
};
Examination.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  examination: state.examination,
});
export default connect(mapStateToProps, { getExaminations })(Examination);
