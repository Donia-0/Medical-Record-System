import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBloodPressure } from "../../../actions/records/bloodPressureAction";
const ViewBloodPressure = (props) => {
  useEffect(() => {
    props.getBloodPressure();
  }, []);
  const { bloodPressure, loading } = props.bloodpressure;
  return <div>ViewBloodPressure</div>;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bloodpressure: state.bloodpressure,
});
export default connect(mapStateToProps, { getBloodPressure })(
  ViewBloodPressure
);
