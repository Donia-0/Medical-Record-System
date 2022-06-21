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
import {
  addGlucose,
  getGlucoseDetailById,
  updateGlucose,
} from "../../../actions/records/glucoseAction";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const FormGlucoseMeasure = (props) => {
  const { glucoseId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    props.getGlucoseDetailById(glucoseId);
  }, []);

  const { glucoseDetail } = props.glucose;
  useEffect(() => {
    if (glucoseDetail && glucoseId) {
      setForm({
        type: glucoseDetail.type,
        result: glucoseDetail.result,
        note: glucoseDetail.note,
        date: moment(glucoseDetail.date).format("YYYY-MM-DD"),
      });
    }
  }, [glucoseDetail]);

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    type: "",
    result: "",
    date: "",
    note: "",
  });
  const { isAuhtenticated, user } = props.auth;
  useEffect(() => {
    if (localStorage.patientId) {
      navigate("/notfound");
    }
  }, []);
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
    if (glucoseDetail && glucoseId) {
      props.updateGlucose(glucoseId, newGlucose, navigate);
    } else {
      props.addGlucose(newGlucose, navigate);
    }
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
              <form
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="form-group"
                onSubmit={onFormSubmit}
              >
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
                <div className="col-lg-12 col-sm-12">
                  <select
                    value={form.type}
                    onChange={onInputChange}
                    className={`form-select ${style.select}`}
                    name="type"
                    style={{
                      width: "133%",
                      marginBottom: "8px",
                      color: "#212529",
                    }}
                  >
                    <option>Choose</option>
                    <option value="Random blood suger">
                      Random blood suger
                    </option>
                    <option value="Glycated Haemoglobin (HbA1c)">
                      Glycated Haemoglobin (HbA1c)
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
                      <button className="btn mb-2">Submit</button>
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
  addGlucose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  glucose: PropTypes.object.isRequired,
  getGlucoseDetailById: PropTypes.func.isRequired,
  updateGlucose: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  glucose: state.glucose,
});
export default connect(mapStateToProps, {
  addGlucose,
  getGlucoseDetailById,
  updateGlucose,
})(FormGlucoseMeasure);
