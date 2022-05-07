import React, { useEffect } from "react";
import Glucose from "../../../images/glucose.png";
import data from "../data";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGlucose } from "../../../actions/records/glucoseAction";
import Glucosetable from "./Glucosetable";
import style from "../../../Css/records/ViewRecord.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Viewglucose = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);
  const { glucose } = props.glucose;
  useEffect(() => {
    props.getGlucose();
  }, []);
  return (
    <div className={style.view}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.view_header}>
            <img src={Glucose} /> Glucose Measurements
          </div>
          <div className="row"></div>
        </div>
      </div>

      <div className={style.view_data}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              <Link
                to="/records/glucose/addglucose"
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.view_table}>
              {/* <ExaminationTable /> */}
              <Glucosetable data={glucose} click={clickhandler} />
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
