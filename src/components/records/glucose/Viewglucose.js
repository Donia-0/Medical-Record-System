import React, { useEffect } from "react";
import Glucose from "../../../images/glucose.png";
import data from "../data";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGlucose } from "../../../actions/records/glucoseAction";
import Glucosetable from "./Glucosetable";

const Viewglucose = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);
  const { glucose } = props.glucose;
  useEffect(() => {
    props.getGlucose();
  }, []);
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
                <Glucosetable data={glucose} click={clickhandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
