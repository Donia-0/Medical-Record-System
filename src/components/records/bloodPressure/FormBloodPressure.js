import React, { useState, useEffect } from "react";
import {
  addBloodPressure,
  getBloodPressureDetailById,
  updateBloodPressure,
} from "../../../actions/records/bloodPressureAction";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import NoteField from "../NoteField";
import style from "../../../Css/records/Record.module.css";
import { useParams } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const FormBloodPressure = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);
  const { bloodpId } = useParams();
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
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);

  useEffect(() => {
    setErrors({});
    props.getBloodPressureDetailById(bloodpId);
  }, []);

  const { bloodPressureDetail } = props.bloodpressures;
  useEffect(() => {
    if (bloodPressureDetail && bloodpId) {
      setForm({
        systolic: bloodPressureDetail.systolic,
        diastolic: bloodPressureDetail.diastolic,
        pulse: bloodPressureDetail.pulse,
        note: bloodPressureDetail.note,
        date: moment(bloodPressureDetail.date).format("YYYY-MM-DD"),
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
    if (bloodPressureDetail && bloodpId) {
      props.updateBloodPressure(bloodpId, data, navigate);
    } else {
      console.log(data);
      props.addBloodPressure(data, navigate);
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
FormBloodPressure.prototype = {
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
  updateBloodPressure,
})(FormBloodPressure);
