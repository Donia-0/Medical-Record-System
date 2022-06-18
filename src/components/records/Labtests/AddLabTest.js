import React, { useState, useEffect } from "react";
import style from "../../../Css/records/Labtest.module.css";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { addLabtest } from "../../../actions/records/LabtestAction";
import AdditioningField from "../AdditioningField";
import RegisterInput from "../../Authentication/RegisterInput";
import NoteField from "../NoteField";
import moment from "moment-timezone";

const AddLabTest = (props) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentTime = moment().tz(timezone).format("yyyy-MM-DDThh:mm");
  const [form, setForm] = useState({
    title: "",
    date: currentTime,
    note: "",
    laptestsImg: [],
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

    const labtest = new FormData();
    labtest.append("title", form.title);
    labtest.append("note", form.note);
    labtest.append("date", form.date);
    for (let i = 0; i < form.laptestsImg.length; i++) {
      labtest.append(`laptestsImg${[]}`, form.laptestsImg[i]);
    }
    console.log(form);
    props.addLabtest(labtest);
  };
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);
  const onFileChange = (e) => {
    setForm({ ...form, laptestsImg: e.target.files });
    console.log([...e.target.files]);
  };
  return (
    <div className={style.Add_labtest}>
      <div className={style.labtest_rules}>
        <p>Keep your medical documents in one place : </p>
        <ul>
          <li>Enter the Test name.</li>
          <li>Choose documents (Make sure it's ".jpg").</li>
          <li>From one to three images.</li>
          <li>Enter other info.</li>
          <li>Save.</li>
        </ul>
      </div>
      <div className={style.add_record_form_container}>
        <div className={style.add_record}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={style.record_container_header}>
                <span className={style.add_record_header}>Add Test</span>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={style.add_record_form}>
                <form className="form-group" onSubmit={onFormSubmit}>
                  <AdditioningField
                    value={form.name}
                    onChange={onInputChange}
                    name="title"
                    labelName="Test Name"
                    type="input"
                    placeholder="Add Test name"
                    err={errors.name}
                  />
                  <AdditioningField
                    onChange={onFileChange}
                    name="laptestsImg"
                    type="file"
                    file="yes"
                    noteFile="Please upload your Lab Test Photo"
                    multiple={true}
                  />
                  <AdditioningField
                    value={form.date}
                    onChange={onInputChange}
                    name="date"
                    labelName="Date"
                    type={"date"}
                    err={errors.date}
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
                        <button className="btn btn-primary mb-2">Save</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddLabTest.prototype = {
  addLabtest: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  labtest: state.labtest,
  errors: state.errors,
});

export default connect(mapStateToProps, { addLabtest })(AddLabTest);
