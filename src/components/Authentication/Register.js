import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { registerUser } from "./../../actions/authAction";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Doctor from "./Doctor";
import Patient from "./Patient";
import PatientStep2 from "./PatientStep2";

const Register = (props) => {
  const navigate = useNavigate();
  const [step, setStep] = useState("step1");
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    nationalId: "",
    phone: "",
    gender: "",
    birthdate: "",
    specialization: "",
    nationalIdImg: "",
    syndicateImg: "",
    role: 0,
  });
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    if (props.auth.isAuhtenticated) {
      navigate("/user/profile");
    }
  }, [props.auth.isAuhtenticated]);
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onCheckboxChange = () => {
    setIsChecked(!isChecked);
    setStep("doctor");
  };
  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    var user = {
      name: form.name,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
      nationalId: form.nationalId,
      phone: form.phone,
      gender: form.gender,
      birthdate: form.birthdate,
      role: 0,
    };
    if (isChecked === true) {
      user = {
        ...user,
        specialization: form.specialization,
        nationalIdImg: form.nationalIdImg,
        syndicateImg: form.syndicateImg,
        role: 1,
      };
    }
    props.registerUser(user, navigate);
    console.log("hello", user);
  };
  const onPrevSubClick = (e, stepNumber) => {
    setStep(`step${stepNumber}`);
    setIsChecked(false);
  };
  const onNextClick = () => {
    setStep("step2");
  };
  const { user } = props.auth;
  return (
    <form onSubmit={onFormSubmit}>
      <Patient
        onChange={onInputChange}
        step={step}
        form={form}
        onClick={onNextClick}
      />
      <PatientStep2
        step={step}
        onChange={onInputChange}
        onClick={(e) => onPrevSubClick(e, 1)}
        form={form}
        onCheckboxChange={onCheckboxChange}
        isChecked={isChecked}
      />
      <Doctor
        step={step}
        form={form}
        onChange={onInputChange}
        onClick={(e) => onPrevSubClick(e, 2)}
      />
    </form>
  );
};
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(Register);
