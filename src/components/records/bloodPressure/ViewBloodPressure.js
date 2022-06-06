import React, { useEffect, useState } from "react";
import bloodpreasureImage from "../../../images/records/bloodpressure/bloodp.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBloodPressure } from "../../../actions/records/bloodPressureAction";
import columns from "./BloodPressureColumns";
import Table from "../Table";

const Viewbloodp = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  const { bloodPressure, loading } = props.bloodpressures;
  useEffect(() => {
    if (localStorage.patientId) {
      const userData = {
        patientId: localStorage.getItem("patientId"),
      };
      props.getBloodPressure(userData);
    } else {
      props.getBloodPressure();
    }
  }, []);
  const Click = () => {
    console.log("delete");
  };

  return (
    <Table
      link="./addbloodpressure"
      img={bloodpreasureImage}
      columns={columns(Click)}
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
  patient: state.patient,
});
export default connect(mapStateToProps, { getBloodPressure })(Viewbloodp);
