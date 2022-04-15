import React, { useState, useEffect } from "react";
import Fields from "../Fields";
import { connect } from "react-redux";
import { addExamination } from "../../../actions/records/examinationAction";
import { PropTypes } from "prop-types";
import classnames from "classnames";

const AddExamination = (props) => {
  const [form, setForm] = useState({
    diagnosis: "",
    symptoms: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newExamination = {
      diagnosis: form.diagnosis,
      symptoms: form.symptoms,
      note: form.note,
    };
    props.addExamination(newExamination);
    console.log(newExamination);
  };
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);
  return (
    <div className="add-examination">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="examination-container">
            <span className="add-examination-header">Add Examination</span>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="add-examination-form">
            <form className="form-group" onSubmit={onFormSubmit}>
              <Fields
                value={form.diagnosis}
                onChange={onInputChange}
                name="diagnosis"
                labelName="Diagnosis"
                type="input"
                placeholder="Add diagnosis"
                err={errors.diagnosis}
              />
              <div className="row form-container">
                <div className="formlabel col-lg-3">
                  <label htmlFor="symptoms">Symptoms:</label>
                </div>
                <div className="col-lg-9">
                  <textarea
                    value={form.symptoms}
                    onChange={onInputChange}
                    name="symptoms"
                    id="symptoms"
                    className={classnames("form-control", {
                      "is-invalid": errors.symptoms,
                    })}
                    rows={3}
                    placeholder="Add Symptoms... "
                  ></textarea>
                  {errors.symptoms && (
                    <div className="invalid-feedback">{errors.symptoms}</div>
                  )}
                </div>
              </div>
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
AddExamination.prototype = {
  addExamination: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  newExamination: state.newExamination,
  errors: state.errors,
});
export default connect(mapStateToProps, { addExamination })(AddExamination);
