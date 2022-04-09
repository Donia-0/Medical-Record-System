import React, { useState, useEffect } from "react";
import Fields from "../Fields";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { prescriptionAdd } from "./../../../actions/records/pescriptionaction";

const Addprescription = (props) => {
  const [form, setForm] = useState({
    drug: "",
    dose: "",
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
      drug: form.drug,
      dose: form.dose,
      note: form.note,
    };
    props.prescriptionAdd(data);
  };
  return (
    <div className="add-prescription">
      <div className="row prescripton-form">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="pres-img-container">
            <span className="pres-header">Add Prescription</span>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="pres-form">
            <form className="form-group" onSubmit={onFormSubmit}>
              <Fields
                value={form.drug}
                onChange={onInputChange}
                name="drug"
                labelName="drug"
                type="number"
                placeholder="120"
              />
              <Fields
                value={form.dose}
                onChange={onInputChange}
                name="dose"
                labelName="dose"
                type="number"
                placeholder="80"
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

Addprescription.prototype = {
  prescriptionAdd: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { prescriptionAdd })(Addprescription);
