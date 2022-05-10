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

const Viewbloodp = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  const { bloodPressure, loading } = props.bloodpressures;
  useEffect(() => {
    props.getBloodPressure();
  }, []);
  const onClink = () => {
    console.log("delete");
  };
  return (
    <Table
      link="./addbloodpressure"
      img={bloodpreasureImage}
      columns={columns(onClink)}
      data={bloodPressure}
      click={clickhandler}
      PageName="Blood Pressure Measurements"
      graphLink="./graph/blood"
      haveImage={true}
      haveGraph={true}
    />
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
