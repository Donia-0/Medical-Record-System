import React, { useState, useEffect } from "react";
import Fields from "../Fields";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import { addExamination } from "../../../actions/records/examinationAction";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import AdditioningField from "../../AdditioningField";
import NoteField from "../../NoteField";

const AddExamination = (props) => {
  const [form, setForm] = useState({
    diagnosis: "",
    symptoms: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    AOS.init();
  });
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
    <div className="additions-container">
      <div className="add-examination">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="examination-container">
              <span className="add-examination-header">Add Examination</span>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="add-examination-form">
              <form
                className="form-group"
                // data-aos="flip-down"
                // data-aos-duration="500"
                data-aos="fade-right"
                // data-aos="zoom-out"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                onSubmit={onFormSubmit}
              >
                <AdditioningField
                  value={form.diagnosis}
                  onChange={onInputChange}
                  name="diagnosis"
                  labelName="Diagnosis"
                  type="input"
                  placeholder="Add diagnosis"
                  err={errors.diagnosis}
                />
                <NoteField
                  labelName="Symptoms"
                  value={form.symptoms}
                  onChange={onInputChange}
                  name="symptoms"
                  id="symptoms"
                  rows={3}
                  placeholder="Add Symptoms... "
                  err={errors.symptoms}
                />
                <NoteField
                  labelName="Note"
                  value={form.note}
                  onChange={onInputChange}
                  name="note"
                  id="note"
                  rows={3}
                  placeholder="Any notes !..."
                  err={errors.note}
                />
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
  examination: state.examination,
  errors: state.errors,
});
export default connect(mapStateToProps, { addExamination })(AddExamination);
