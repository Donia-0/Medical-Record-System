import { fromUnixTime } from "date-fns";
import React, { useState, useEffect } from "react";
import Glucose from "../../../images/glucose.png";
import Fields from "../Fields";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addGlucose } from "../../../actions/records/glucoseAction";
const GlucoseMeasure = (props) => {
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
    <div className="add-bloodp-gluc">
      <div className="row blood-gluc-form">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="gluc-img-container">
            <span className="gluc-header">Glucose</span>
            <div className="gluc-img">
              <img src={Glucose} />
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="bloodp-gluc-form">
            <form className="form-group" onSubmit={onFormSubmit}>
              <Fields
                value={form.type}
                onChange={onInputChange}
                name="type"
                labelName="Type"
                type="text"
                placeholder="Enter type"
                err={errors.type}
              />
              <Fields
                value={form.result}
                onChange={onInputChange}
                name="result"
                labelName="Result"
                type="text"
                err={errors.result}
                placeholder="Enter result"
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
                  <label htmlFor="note">Note:</label>
                </div>
                <div className="col-lg-9">
                  <textarea
                    value={form.note}
                    onChange={onInputChange}
                    name="note"
                    id="note"
                    className="form-control"
                    rows={3}
                    placeholder="Any notes !... "
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 add-btn">
                  <button type="submit" className="btn btn-primary mb-2">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

GlucoseMeasure.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addGlucose: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addGlucose })(GlucoseMeasure);
