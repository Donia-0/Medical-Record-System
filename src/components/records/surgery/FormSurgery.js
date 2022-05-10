import React, { useState, useEffect } from "react";
import Fields from "../Fields";
import { connect } from "react-redux";
import { addSurgery } from "../../../actions/records/surgeryAction";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import style from "../../../Css/records/Record.module.css";
import { useParams } from "react-router";

const FormSurgery = (props) => {
  const { surgeryId } = useParams();

  const [form, setForm] = useState({
    name: "",
    doctorName: "",
    location: "",
    date: "",
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
    const newSurgery = {
      name: form.name,
      doctorName: form.doctorName,
      location: form.location,
      date: form.date,
    };
    props.addSurgery(newSurgery);
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
              <form className="form-group" onSubmit={onFormSubmit}>
                <AdditioningField
                  value={form.name}
                  onChange={onInputChange}
                  name="name"
                  labelName="Name"
                  type="input"
                  placeholder="Add Surgery Name"
                  err={errors.name}
                />
                <AdditioningField
                  value={form.doctorName}
                  onChange={onInputChange}
                  name="doctorName"
                  labelName="Dr Name"
                  type="input"
                  placeholder="Add Doctor Name"
                  err={errors.doctorName}
                />
                <AdditioningField
                  value={form.location}
                  onChange={onInputChange}
                  name="location"
                  labelName="Location"
                  type="input"
                  placeholder="Add Location"
                  err={errors.location}
                />
                <AdditioningField
                  value={form.date}
                  onChange={onInputChange}
                  name="date"
                  labelName="Date"
                  type="date"
                  err={errors.date}
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
FormSurgery.prototype = {
  addSurgery: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  newSurgery: state.newSurgery,
  errors: state.errors,
});
export default connect(mapStateToProps, { addSurgery })(FormSurgery);
