import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addAllergy } from "../../../actions/records/allergyAction";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import style from "../../../Css/records/Record.module.css";
const AddAllergy = (props) => {
  const [form, setForm] = useState({
    name: "",
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
    setErrors({});
    const newAllergy = {
      name: form.name,
      userId: localStorage.patientId,
    };
    props.addAllergy(newAllergy);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className={style.record_container_header}>
          <span className={style.add_record_header}>Add Allergy</span>
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
              placeholder="Add allergy name"
              err={errors.name}
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
  );
};
AddAllergy.prototype = {
  addAllergy: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  allergy: state.allergy,
  errors: state.errors,
});
export default connect(mapStateToProps, { addAllergy })(AddAllergy);
