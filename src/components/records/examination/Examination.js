import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExaminationTable from "../ExaminationTable";
import FilterModal from "./../FilterModal";
import data from "../data";
import { Link } from "react-router-dom";
import Addprescription from "./Addprescription";
import EditExamination from "./EditExamination";

const Examination = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);

  return (
    <div className="examination">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="examination-filter">
            <div className="examination-filter-header">Examination</div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="examination-filer-button">
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

      <div className="examination-data">
        <div className="row">
          <div className="col-lg-12">
            <div className="add-examination-btn">
              <Link
                to="./addExamination"
                type="button"
                className="btn btn-primary"
              >
                Add Examination
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="examination-table">
              {/* <ExaminationTable /> */}
              <ExaminationTable data={data} click={clickhandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
