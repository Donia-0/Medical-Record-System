import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGlucose } from "../../../actions/records/glucoseAction";
import columns from "./GlucoseColumns";
import Table from "./../Table";
import glucoseImage from "../../../images/glucose.png";
import { useParams } from "react-router";

const Viewglucose = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  const { glucose } = props.glucose;

  useEffect(() => {
    if (localStorage.patientId) {
      const userData = {
        patientId: localStorage.getItem("patientId"),
      };
      props.getGlucose(userData);
    } else {
      props.getGlucose();
    }
  }, []);
  return (
    <Table
      link="./addglucose"
      img={glucoseImage}
      haveImage={true}
      columns={columns}
      data={glucose}
      click={clickhandler}
      PageName="Glucose Measurements"
    />
  );
};
Viewglucose.propTypes = {
  auth: PropTypes.object.isRequired,
  glucose: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  glucose: state.glucose,
});
export default connect(mapStateToProps, { getGlucose })(Viewglucose);
