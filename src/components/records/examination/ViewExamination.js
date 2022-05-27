import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import FilterModal from "../FilterModal";
import data from "../data";
import { Link } from "react-router-dom";
import style from "../../../Css/records/ViewRecord.module.css";
import Table from "../Table";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { faEdit, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import PrescriptionView from "./PrescriptionView";
import { getExaminations } from "../../../actions/records/examinationAction";
import moment from "moment-timezone";
const ViewExamination = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowPres, setModalShowPres] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);
  const onPrescriptionViewClick = (presId) => {
    console.log(presId);
  };
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
      name: "Note",
      selector: (row) => row.note,
      sortable: true,
    },
    {
      name: "Dr Name",
      selector: (row) => row.doctorId.name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => moment(row.date).format("MMMM-D-YYYY"),
      sortable: true,
    },
    {
      name: "Prescription",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className={style.prescriptions_btns}>
            <div
              className={`${style.view_prescription_btn} ${style.pres_btns}`}
            >
              <span className={style.tooltiptext}>
                Click To Show Prescription
              </span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  row.modalShowPres = true;
                  setModalShowPres(true);
                  onPrescriptionViewClick(row._id);
                }}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              {row.modalShowPres ? (
                <PrescriptionView
                  examId={row._id}
                  show={modalShowPres}
                  onHide={() => {
                    row.modalShowPres = false;
                    setModalShowPres(false);
                  }}
                />
              ) : null}
            </div>
            <div className={`${style.pres_btns}`}>
              <Link
                to={`/records/prescriptions/addprescription/${row._id}`}
                className={`btn ${style.add_pres_in_view}`}
                onClick={() => {
                  row.modalShowPres = true;
                  setModalShowPres(true);
                  onPrescriptionViewClick(row._id);
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
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
              <Link to={`./${row._id}`} type="button" className="btn">
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

  const { examinations, loading } = props.examination.Examination;
  useEffect(() => {
    if (localStorage.patientId) {
      const userData = {
        patientId: localStorage.getItem("patientId"),
      };
      props.getExaminations(userData);
    } else {
      props.getExaminations();
    }
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
                  <button className="btn" onClick={() => setModalShow(true)}>
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

      <Table
        link="./addexamination"
        columns={columns}
        data={!examinations ? [] : examinations}
        click={clickhandler}
      />
    </div>
  );
};
ViewExamination.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  examination: state.examination,
});
export default connect(mapStateToProps, { getExaminations })(ViewExamination);
