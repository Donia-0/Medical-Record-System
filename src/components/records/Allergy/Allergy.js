import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addAllergy } from "../../../actions/records/allergyAction";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import style from "../../../Css/records/Record.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faListUl } from "@fortawesome/free-solid-svg-icons";
import AddAllergy from "./AddAllergy";
import ViewAllergy from "./ViewAllergy";

const Allergy = (props) => {
  //   const [form, setForm] = useState({
  //     name: "",
  //   });

  //   const [errors, setErrors] = useState({});
  //   const onInputChange = (e) => {
  //     const value = e.target.value;
  //     setForm({
  //       ...form,
  //       [e.target.name]: value,
  //     });
  //   };
  //   const onFormSubmit = (e) => {
  //     e.preventDefault();
  //     const newAllergy = {
  //       name: form.name,
  //     };
  //     props.addAllergy(newAllergy);
  //     console.log(newAllergy);
  //   };
  //   useEffect(() => {
  //     setErrors({});
  //     setErrors(props.errors);
  //   }, [props.errors]);
  return (
    <div
      className={style.add_record_form_container}
      style={{ flexDirection: "column" }}
    >
      {localStorage.patientId ? (
        <div className={style.add_record} style={{ marginTop: "20px" }}>
          <AddAllergy />
        </div>
      ) : null}
      <div className={style.add_record} style={{ marginTop: "20px" }}>
        <ViewAllergy />
      </div>
    </div>
  );
};

export default Allergy;
