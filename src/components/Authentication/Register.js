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
    nationalImg: "",
    syndicateImg: "",
    role: 0,
    profileImg: "",
  });
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    if (isChecked === true) {
      setForm({ ...form, role: 1 });
    }
  }, [isChecked]);
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
    const user = new FormData();
    user.append("name", form.name);
    user.append("email", form.email);
    user.append("password", form.password);
    user.append("confirmPassword", form.confirmPassword);
    user.append("nationalId", form.nationalId);
    user.append("phone", form.phone);
    user.append("gender", form.gender);
    user.append("birthdate", form.birthdate);
    user.append("profileImg", form.profileImg);
    setProgress(progress + (100 / 3) * 2);

    if (isChecked === true) {
      console.log("check");
      setForm({ ...form, role: 1 });
      user.append("specialization", form.specialization);
      user.append("nationalImg", form.nationalImg);
      user.append("syndicateImg", form.syndicateImg);
      setProgress(progress + 100 / 3);
    }
    user.append("role", form.role);

    console.log(form.role);
    props.registerUser(user, navigate);
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
  const onFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };
  return (
    <div>
      <div className="steps" data-aos="flip-left" data-aos-duration="1500">
        <Steps progress={progress} />
      </div>
      <form onSubmit={onFormSubmit}>
        <Patient
          onChange={onInputChange}
          onFileChange={onFileChange}
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
          onFileChange={onFileChange}
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
