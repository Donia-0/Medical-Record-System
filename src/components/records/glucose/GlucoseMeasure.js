import React from "react";
import Glucose from "../../../images/glucose.png";
import Fields from "../Fields";

const GlucoseMeasure = () => {
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
            <form className="form-group">
              <Fields
                name="type"
                labelName="Type"
                type="text"
                placeholder="Enter type"
              />
              <Fields
                name="result"
                labelName="Result"
                type="text"
                placeholder="Enter result"
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

export default GlucoseMeasure;
