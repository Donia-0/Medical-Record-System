import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import {
  addExamination,
  getExaminationDetailById,
  updateExamination,
} from "../../../actions/records/examinationAction";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import NoteField from "../NoteField";
import style from "../../../Css/records/Record.module.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const FormExamination = (props) => {
  const navigate = useNavigate();

  const { examId } = useParams();

  const [form, setForm] = useState({
    diagnosis: "",
    symptoms: "",
    note: "",
    userId: "",
  });
  const [errors, setErrors] = useState({});
  const { isAuhtenticated, user } = props.auth;
  useEffect(() => {
    if (user.role != 1) {
      navigate("/notfound");
    }
  }, []);
  useEffect(() => {
    AOS.init();
    props.getExaminationDetailById(examId);
  }, []);
  const { examinationDetail } = props.examination;
  useEffect(() => {
    if (examinationDetail && examId) {
      setForm({
        diagnosis: examinationDetail.diagnosis,
        symptoms: examinationDetail.symptoms,
        note: examinationDetail.note,
      });
    }
  }, [examinationDetail]);
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    var newExamination = {
      diagnosis: form.diagnosis,
      symptoms: form.symptoms,
      note: form.note,
      userId: localStorage.getItem("patientId"),
    };
    if (examinationDetail && examId) {
      props.updateExamination(examId, newExamination, navigate);
    } else {
      props.addExamination(newExamination, navigate);
    }
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
  getExaminationDetailById: PropTypes.func.isRequired,
  updateExamination: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  examination: state.examination,
  errors: state.errors,
});
export default connect(mapStateToProps, {
  addExamination,
  getExaminationDetailById,
  updateExamination,
})(FormExamination);
