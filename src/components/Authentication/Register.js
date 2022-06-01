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
import Steps from "./Steps";

const Register = (props) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
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
    setProgress(progress + 100 / 3);
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
    setProgress(progress + (100 / 3) * 2);
    if (isChecked === true) {
      user = {
        ...user,
        specialization: form.specialization,
        nationalIdImg: form.nationalIdImg,
        syndicateImg: form.syndicateImg,
        role: 1,
      };
      setProgress(progress + 100 / 3);
    }
    props.registerUser(user, navigate);
    console.log("hello", user);
  };
  const onPrevSubClick = (e, stepNumber) => {
    setStep(`step${stepNumber}`);
    setIsChecked(false);
    if (progress === 100) {
      setProgress(progress - (100 / 3) * 3);
    } else {
      setProgress(progress - 100 / 3);
    }
    if (isChecked) {
      setProgress(progress - 100 / 3);
    }
  };
  const onNextClick = () => {
    setStep("step2");
    setProgress(progress + 100 / 3);
  };
  const { user } = props.auth;
  return (
    <div>
      <div className="steps" data-aos="flip-left" data-aos-duration="1500">
        <Steps progress={progress} />
      </div>
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
    </div>
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
