import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExaminationTable from "../ExaminationTable";
import FilterModal from "./../FilterModal";

const Examination = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="examination-filer-button">
                  <button
                    className="btn-primary"
                    onClick={() => setModalShow(true)}
                  >
                    <FontAwesomeIcon icon={faFilter} /> Add record
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
              <button type="button" className="btn btn-primary">
                Add Examination
              </button>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="examination-table">
              <ExaminationTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
