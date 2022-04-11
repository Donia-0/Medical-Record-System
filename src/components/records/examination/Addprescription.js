import React, { useState, useEffect } from "react";
import Fields from "../Fields";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { prescriptionAdd } from "./../../../actions/records/pescriptionaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Addprescription = (props) => {
  const [inputList, setInputList] = useState([
    { drug: "", dose: "", note: "" },
  ]);

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { drug: "", dose: "", note: "" }]);
  };

  const [form, setForm] = useState({
    drug: "",
    dose: "",
    note: "",
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
          <div className="pres-container">
            <span className="pres-header">Add Prescription</span>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="pres-form">
            <form className="form-group" onSubmit={onFormSubmit}>
              {inputList.map((x, i) => {
                return (
                  <div>
                    <Fields
                      value={form.drug}
                      onChange={onInputChange}
                      name="drug"
                      labelName="Drug"
                      type="text"
                      placeholder="Enter drug name"
                    />
                    <Fields
                      value={form.dose}
                      onChange={onInputChange}
                      name="dose"
                      labelName="Dose"
                      type="number"
                      placeholder="Enter dose "
                    />

                    <div className="row form-container">
                      <div className="formlabel col-lg-3">
                        <label htmlFor="note">Note:</label>
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
                      <div className="add-btns">
                        <div className="col-lg-12 col-md-12 col-sm-12 add-remove-pres">
                          {inputList.length !== 1 && (
                            <button
                              className="btn btn-primary mb-2"
                              onClick={() => handleRemoveClick(i)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          )}
                          {inputList.length - 1 === i && (
                            <button
                              onClick={handleAddClick}
                              className="btn btn-primary mb-2"
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 submit-pres">
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
