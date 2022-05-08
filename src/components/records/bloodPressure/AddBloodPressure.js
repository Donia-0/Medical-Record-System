import React, { useState, useEffect } from "react";
import {
  addBloodPressure,
  getBloodPressureDetailById,
} from "../../../actions/records/bloodPressureAction";
import moment from "moment-timezone";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import NoteField from "../NoteField";
import style from "../../../Css/records/Record.module.css";
import { useParams } from "react-router";

const AddBloodPressure = (props) => {
  const { bloodpId, name } = useParams();
  const [errors, setErrors] = useState({});
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentTime = moment().tz(timezone).format("yyyy-MM-DDThh:mm");
  const [form, setForm] = useState({
    systolic: "",
    diastolic: "",
    pulse: "",
    note: "",
    date: currentTime,
  });
  const [bloodDetail, setBloodDetail] = useState({});

  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);

  useEffect(() => {
    props.getBloodPressureDetailById(bloodpId);
  }, []);

  const { bloodPressureDetail } = props.bloodpressures;
  console.log(bloodPressureDetail);
  useEffect(() => {
    if (bloodPressureDetail && bloodpId) {
      setForm({
        systolic: bloodPressureDetail.systolic,
        diastolic: bloodPressureDetail.diastolic,
        pulse: bloodPressureDetail.pulse,
        note: bloodPressureDetail.note,
        date: moment(bloodPressureDetail.date).format("MMMM Do YYYY"),
      });
    }
  }, [bloodPressureDetail]);
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      systolic: form.systolic,
      diastolic: form.diastolic,
      pulse: form.pulse,
      note: form.note,
      date: form.date,
    };
    props.addBloodPressure(data);
    setForm({
      systolic: "",
      diastolic: "",
      pulse: "",
      note: "",
      date: currentTime,
    });
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
                <AdditioningField
                  value={form.systolic}
                  onChange={onInputChange}
                  name="systolic"
                  labelName="Systolic"
                  type="number"
                  placeholder="120"
                  err={errors.systolic}
                />
                <AdditioningField
                  value={form.diastolic}
                  onChange={onInputChange}
                  name="diastolic"
                  labelName="Diastolic"
                  type="number"
                  placeholder="80"
                  err={errors.diastolic}
                />
                <AdditioningField
                  value={form.pulse}
                  onChange={onInputChange}
                  name="pulse"
                  labelName="Pulse"
                  type="number"
                  placeholder="0"
                  err={errors.pulse}
                />
                <AdditioningField
                  value={form.date}
                  onChange={onInputChange}
                  name="date"
                  labelName="Date"
                  type={bloodPressureDetail ? "text" : "datetime-local"}
                  err={errors.date}
                  disabled={true}
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
                      <button className="btn btn-primary mb-2">Add</button>
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
AddBloodPressure.prototype = {
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
})(AddBloodPressure);
