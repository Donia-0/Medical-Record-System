import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import { addExamination } from "../../../actions/records/examinationAction";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import NoteField from "../NoteField";
import style from "../../../Css/records/Record.module.css";
import { useParams } from "react-router";
const FormExamination = (props) => {
  const { examId } = useParams();

  const [form, setForm] = useState({
    diagnosis: "",
    symptoms: "",
    note: "",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    AOS.init();
  }, []);
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
    <div className={style.add_record_form_container}>
      <div className={style.add_record}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.record_container_header}>
              <span className={style.add_record_header}>{props.header}</span>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.add_record_form}>
              <form
                className="form-group"
                data-aos="fade-right"
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
FormExamination.prototype = {
  addExamination: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  examination: state.examination,
  errors: state.errors,
});
export default connect(mapStateToProps, { addExamination })(FormExamination);
