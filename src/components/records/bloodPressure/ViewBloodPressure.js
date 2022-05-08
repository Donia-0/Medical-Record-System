import React, { useEffect, useState } from "react";
import bloodpreasureImage from "../../../images/records/bloodpressure/bloodp.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBloodPressure } from "../../../actions/records/bloodPressureAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faPlus } from "@fortawesome/free-solid-svg-icons";
import style from "../../../Css/records/ViewRecord.module.css";
import columns from "./BloodPressureColumns";
import Table from "../Table";

const ViewBloodPressure = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  const { bloodPressure, loading } = props.bloodpressures;
  useEffect(() => {
    props.getBloodPressure();
  }, []);
  return (
    <div className={style.view}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.view_header}>
            <img src={bloodpreasureImage} /> Blood Preasure Measurements
          </div>
        </div>
        <div className={style.graph_link}>
          <Link to="/records/graph/blood">
            <FontAwesomeIcon icon={faChartBar} /> Go to graph view
          </Link>
        </div>
      </div>
      <div className={style.view_data}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              <Link
                to="/records/bloodpreasure/addbloodp"
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.view_table}>
              <Table
                columns={columns}
                data={bloodPressure}
                click={clickhandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewBloodPressure.propTypes = {
  auth: PropTypes.object.isRequired,
  getBloodPressure: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bloodpressures: state.bloodpressures,
});
export default connect(mapStateToProps, { getBloodPressure })(
  ViewBloodPressure
);
