import React, { useEffect, useState } from "react";
import bloodpreasureImage from "../../../images/records/bloodpressure/bloodp.png";
import data from "../data";
import { Link } from "react-router-dom";
import Bloodptable from "./Bloodptable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBloodPressure } from "./../../../actions/records/bloodPressureAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
const Viewbloodp = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  const { bloodPressure, loading } = props.bloodpressures;
  useEffect(() => {
    props.getBloodPressure();
  }, []);
  const centerText = <h1>There's no data yet</h1>;
  return (
    <div className="container">
      <div className="preasureview">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="preasureview-header">
              <img src={bloodpreasureImage} /> Blood Preasure Measurements
            </div>

            <div className="row"></div>
          </div>
        </div>

        <div className="preasureview-data">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-left graph-link">
                <Link to="/records/graph/blood">
                  <FontAwesomeIcon icon={faChartBar} /> Go to graph view
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
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
                {/* {bloodPressure.length !== 0 ? (
                  <div className="text-center">{centerText}</div>
                ) : (
                  ""
                )} */}
                <Bloodptable data={bloodPressure} click={clickhandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Viewbloodp.propTypes = {
  auth: PropTypes.object.isRequired,
  getBloodPressure: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bloodpressures: state.bloodpressures,
});
export default connect(mapStateToProps, { getBloodPressure })(Viewbloodp);
