import React, { useState, useEffect } from "react";
import bloodpreasure from "../../../images/records/bloodpressure/bloodp.png";
import Fields from "../Fields";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBloodPressure } from "./../../../actions/records/bloodPressureAction";
import { toast } from "react-toastify";

const BloodPreasure = (props) => {
  const [form, setForm] = useState({
    systolic: "",
    diastolic: "",
    pulse: "",
    note: "",
    date: "",
  });

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
    };
    props.addBloodPressure(data);
  };
  return (
    <div className="add-bloodp-gluc">
      <div className="row blood-gluc-form">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="bp-img-container">
            <span className="bp-header">Blood Preasure</span>
            <div className="bp-img">
              <img src={bloodpreasure} />
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="bloodp-gluc-form">
            <form className="form-group" onSubmit={onFormSubmit}>
              <Fields
                value={form.systolic}
                onChange={onInputChange}
                name="systolic"
                labelName="Systolic"
                type="number"
                placeholder="120"
              />
              <Fields
                value={form.diastolic}
                onChange={onInputChange}
                name="diastolic"
                labelName="Diastolic"
                type="number"
                placeholder="80"
              />
              <Fields
                value={form.pulse}
                onChange={onInputChange}
                name="pulse"
                labelName="Pulse"
                type="number"
                placeholder="0"
              />
              <Fields
                value={form.date}
                onChange={onInputChange}
                name="date"
                labelName="Date"
                type="date"
              />
              <div className="row form-container">
                <div className="formlabel col-lg-3">
                  <label htmlFor="date">Note:</label>
                </div>
                <div className="col-lg-9">
                  <textarea
                    value={form.note}
                    onChange={onInputChange}
                    name="note"
                    id="date"
                    className="form-control"
                    rows={3}
                    placeholder="Any notes !... "
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 add-btn">
                  <button className="btn btn-primary mb-2">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

BloodPreasure.prototype = {
  addBloodPressure: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { addBloodPressure })(BloodPreasure);
