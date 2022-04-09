import React from "react";
import Fields from "../Fields";

const AddExamination = () => {
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
            <form className="form-group">
              <div className="row form-container">
                <div className="formlabel col-lg-3">
                  <label htmlFor="symptoms">Symptoms:</label>
                </div>
                <div className="col-lg-9">
                  <textarea
                    name="symptoms"
                    id="symptoms"
                    className="form-control"
                    rows={3}
                    placeholder="Add Symptoms... "
                  ></textarea>
                </div>
              </div>
              <Fields
                name="diagnosis"
                labelName="Diagnosis"
                type="input"
                placeholder="Add diagnosis"
              />
              <Fields name="date" labelName="Date" type="date" />
              <div className="row form-container">
                <div className="formlabel col-lg-3">
                  <label htmlFor="note">Note:</label>
                </div>
                <div className="col-lg-9">
                  <textarea
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

export default AddExamination;
