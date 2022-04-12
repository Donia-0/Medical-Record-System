import React from "react";
import Glucose from "../../../images/glucose.png";
import data from "../data";
import { Link } from "react-router-dom";

import Glucosetable from "./Glucosetable";

const Viewglucose = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);

  return (
    <div className="container">
      <div className="glucoseview">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="glucoseview-header">
              <img src={Glucose} /> Glucose Measurements
            </div>
            <div className="row"></div>
          </div>
        </div>

        <div className="glucoseview-data">
          <div className="row">
            <div className="col-lg-12">
              <div className="add-glucoseview-btn">
                <Link
                  to="/records/glucose"
                  type="button"
                  className="btn btn-primary"
                >
                  Add
                </Link>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="glucoseview-table">
                {/* <ExaminationTable /> */}
                <Glucosetable data={data} click={clickhandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewglucose;
