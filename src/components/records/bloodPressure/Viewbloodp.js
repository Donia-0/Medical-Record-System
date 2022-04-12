import React from "react";
import bloodpreasure from "../../../images/records/bloodpressure/bloodp.png";
import data from "../data";
import { Link } from "react-router-dom";

import Bloodptable from "./Bloodptable";

const Viewbloodp = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);

  return (
    <div className="container">
      <div className="preasureview">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="preasureview-header">
              <img src={bloodpreasure} /> Blood Preasure Measurements
            </div>
            <div className="row"></div>
          </div>
        </div>

        <div className="preasureview-data">
          <div className="row">
            <div className="col-lg-12">
              <div className="add-preasureview-btn">
                <Link
                  to="/records/BloodPreasure"
                  type="button"
                  className="btn btn-primary"
                >
                  Add
                </Link>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="preasureview-table">
                {/* <ExaminationTable /> */}
                <Bloodptable data={data} click={clickhandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewbloodp;
