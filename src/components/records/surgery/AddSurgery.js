import React, { useState, useEffect } from "react";
import Fields from "../Fields";
import { connect } from "react-redux";
import { addSurgery } from "../../../actions/records/surgeryAction";
import { PropTypes } from "prop-types";
import AdditioningField from "../../AdditioningField";

const AddSurgery = (props) => {
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
    <div className="additions-container">
      <div className="add-surgery">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="surgery-container">
              <span className="add-surgery-header">Add Surgery</span>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="add-surgery-form">
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
AddSurgery.prototype = {
  addSurgery: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  newSurgery: state.newSurgery,
  errors: state.errors,
});
export default connect(mapStateToProps, { addSurgery })(AddSurgery);
