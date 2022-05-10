import React, { useState, useEffect } from "react";
import {
  addBloodPressure,
  getBloodPressureDetailById,
} from "../../../actions/records/bloodPressureAction";
import Glucose from "../../../images/glucose.png";
import moment from "moment-timezone";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import NoteField from "../NoteField";
import style from "../../../Css/records/Record.module.css";
import { useParams } from "react-router";

const FormGlucoseMeasure = (props) => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    type: "",
    result: "",
    date: "",
    note: "",
  });
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newGlucose = {
      type: form.type,
      result: form.result,
      date: form.date,
      note: form.note,
    };
    props.addGlucose(newGlucose);
  };
  return (
    <div className={style.add_record_form_container}>
      <div className={style.add_record}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.record_img_container}>
              <div className={style.record_container_header}>
                <span className={style.add_record_header}>{props.header}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.add_record_form}>
              <form className="form-group" onSubmit={onFormSubmit}>
                <div className="formlabel col-lg-3 col-md-12 col-sm-12">
                  <label
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#2a7f82",
                    }}
                  >
                    Type{" "}
                  </label>
                </div>
                <div className="col-lg-9 col-sm-12">
                  <select
                    className="form-select"
                    style={{
                      width: "133%",
                      marginBottom: "8px",
                      color: "#212529",
                    }}
                  >
                    <option>Choose</option>
                    <option value="rabdom-bs">Random blood suger</option>
                    <option value="fasting-bs">Fasting blood suger</option>
                    <option value="post-prandial-bs">
                      Post prandial blood suger (2hr)
                    </option>
                  </select>
                </div>
                <AdditioningField
                  value={form.result}
                  onChange={onInputChange}
                  name="result"
                  labelName="Result"
                  type="number"
                  err={errors.result}
                  placeholder="Enter result"
                />
                <AdditioningField
                  value={form.date}
                  onChange={onInputChange}
                  name="date"
                  labelName="Date"
                  type="date"
                  err={errors.date}
                />
                <NoteField
                  labelName="Note"
                  value={form.note}
                  onChange={onInputChange}
                  name="note"
                  id="note"
                  rows={2}
                  placeholder="Any notes !..."
                  err={errors.note}
                />
                <div className="row">
                  <div className="col-lg-12">
                    <div className={style.add_btn}>
                      <button className="btn btn-primary mb-2">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
FormGlucoseMeasure.prototype = {
  addBloodPressure: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getBloodPressureDetailById: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  bloodpressures: state.bloodpressures,
});
export default connect(mapStateToProps, {
  addBloodPressure,
  getBloodPressureDetailById,
})(FormGlucoseMeasure);
