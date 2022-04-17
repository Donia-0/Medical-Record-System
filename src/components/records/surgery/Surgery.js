import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SurgeryTable from "./SurgeryTable";
import FilterModal from "./../FilterModal";
import data from "../data";
import { Link } from "react-router-dom";

const Surgery = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="surgery">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="surgery-filter">
            <div className="surgery-filter-header">Surgery</div>
          </div>
        </div>
      </div>

      <div className="surgery-data">
        <div className="row">
          <div className="col-lg-12">
            <div className="add-surgery-btn">
              <Link
                to="/records/addsurgery"
                type="button"
                className="btn btn-primary"
              >
                Add Surgery
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="surgery-table">
              {/* <ExaminationTable /> */}
              <SurgeryTable data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surgery;
