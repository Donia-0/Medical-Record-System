import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExaminationTable from "../ExaminationTable";
import FilterModal from "./../FilterModal";
import data from "../data";
import { Link } from "react-router-dom";
import Addprescription from "./Addprescription";
import EditExamination from "./EditExamination";
import style from "../../../Css/records/ViewRecord.module.css";
const Examination = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);

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

      <div className={style.view_data}>
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
