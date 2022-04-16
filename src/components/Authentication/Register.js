// States for fields
// api to post request by redux
// step bar
import React, { useEffect, useState } from "react";
import RegisterInput from "./RegisterInput";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faUser,
  faLock,
  faAt,
  faIdCard,
  faPhoneFlip,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//redux
import { connect } from "react-redux";
import { registerUser } from "./../../actions/authAction";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

//
toast.configure();
const Register = (props) => {
  const navigate = useNavigate();
  //States
  const [step, setStep] = useState("step1");
  const [isChecked, setIsChecked] = useState(false);
  const [err, setErr] = useState({});
  //States for form register
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
  // life cycle
  useEffect(() => {
    AOS.init();
  });
  // Controlled functions
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

  useEffect(() => {
    if (props.auth.isAuhtenticated) {
      navigate("/user/profile");
    }
  }, [props.auth.isAuhtenticated]);
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
  };
  const btnsPrevSubmit = (stepNumber) => {
    return (
      <div className="btns-container-register-steps mt-8">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="input-group mb-3">
              <div
                onClick={() => {
                  setStep(`step${stepNumber}`);
                  setIsChecked(false);
                }}
                className="btn btns-registers-steps"
              >
                PREV
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div
              className="input-group mb-3"
              style={{ justifyContent: "right" }}
            >
              <button className="btn btns-registers-steps">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const patientStep1 = (
    <div
      className={step === "step1" ? "remove-dis-none" : "dis-none"}
      data-aos="flip-left"
      data-aos-duration="1500"
    >
      {/* Start Input name Field */}

      <RegisterInput
        value={form.name}
        onChange={onInputChange}
        id="name"
        name="name"
        type="text"
        placeholder="Enter Name"
        isHasIcon="yes"
        icon={faUser}
      />
      {/* End Input name Field */}
      {/* Start Input email Field */}
      <RegisterInput
        value={form.email}
        onChange={onInputChange}
        id="email"
        name="email"
        type="Email"
        placeholder="Enter Email Address"
        isHasIcon="yes"
        icon={faAt}
      />
      {/* End Input email Field */}
      {/* Start Input date Field */}
      <div className="input-group">
        <div className="input-group-prepend">
          <label
            style={{ marginRight: "4px" }}
            className="input-group-text"
            htmlFor="birthdate"
          >
            Birthdate
          </label>
        </div>
        <RegisterInput
          value={form.birthdate}
          onChange={onInputChange}
          id="birthdate"
          name="birthdate"
          type="date"
        />
      </div>
      {/* End Input date Field */}
      {/* Start Input gender Field */}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label
            style={{ marginRight: "4px", width: "90px" }}
            className="input-group-text"
            htmlFor="gender"
          >
            Gender
          </label>
        </div>
        <select
          style={{ width: "100px" }}
          name="gender"
          className="custom-select"
          id="gender"
          value={form.gender}
          onChange={onInputChange}
        >
          <option>Choose</option>
          <option value="male">Male </option>
          <option value="female">Female</option>
        </select>
      </div>
      {/* End Input gender Field */}
      {/* Buttom NEXT */}
      <div className="input-group mb-3" style={{ justifyContent: "right" }}>
        <div
          onClick={() => {
            setStep("step2");
          }}
          className="btn btns-registers-steps"
        >
          NEXT
        </div>
      </div>
    </div>
  );
  const patientStep2 = (
    <div
      className={step === "step2" ? "remove-dis-none" : "dis-none"}
      data-aos="flip-right"
      data-aos-duration="1500"
    >
      {/* Start Input password Field */}
      <RegisterInput
        value={form.password}
        onChange={onInputChange}
        isHasIcon="yes"
        icon={faLock}
        name="password"
        id="password"
        type="password"
        placeholder="Enter Password"
      />
      {/* End Input password Field */}
      {/* Start Input confirm password Field */}
      <RegisterInput
        value={form.confirmPassword}
        onChange={onInputChange}
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        placeholder="Enter Confrim Password"
        isHasIcon="yes"
        icon={faLock}
      />

      {/* End Input confirm password Field */}
      {/* Start Input nationalid Field */}
      <RegisterInput
        value={form.nationalId}
        onChange={onInputChange}
        name="nationalId"
        id="nationalId"
        type="text"
        placeholder="Enter Your National ID"
        isHasIcon="yes"
        icon={faIdCard}
      />
      {/* End Input nationalid Field */}
      {/* Start Input phone Field */}
      <RegisterInput
        value={form.phone}
        onChange={onInputChange}
        isHasIcon="yes"
        icon={faPhoneFlip}
        id="phone"
        name="phone"
        type="text"
        placeholder="Enter Your Phone Number"
      />
      {/* End Input phone Field */}
      {/* Start isCheckedbox for being a doctor */}
      <div className="form-check" style={{ marginBottom: "20px" }}>
        <input
          name="role"
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
        <label className="form-check-label" htmlFor="role">
          Become a doctor
        </label>
      </div>
      {/* End isCheckedbox for being a doctor */}
      {/* Buttons NEXT & Submit*/}
      {btnsPrevSubmit(1)}
    </div>
  );
  const doctor = (
    <div
      className={step === "doctor" ? "remove-dis-none" : "dis-none"}
      data-aos="flip-right"
      data-aos-duration="1500"
    >
      {/* Start Input Syndicate Field */}
      <RegisterInput
        value={form.specialization}
        onChange={onInputChange}
        name="specialization"
        type="text"
        placeholder="Enter your specialization"
        isHasIcon="yes"
        icon={faUserDoctor}
      />
      {/* End Input Syndicate Field */}
      {/* Start Input national id image Field */}
      <RegisterInput
        value={form.nationalIdImg}
        onChange={onInputChange}
        name="nationalIdImg"
        type="file"
        file="yes"
        noteFile="Please upload your national id image"
      />
      {/* End Input national id  image Field */}
      {/* Start Input syndicate image Field */}
      <RegisterInput
        value={form.syndicateImg}
        onChange={onInputChange}
        name="syndicateImg"
        type="file"
        file="yes"
        noteFile="Please upload your syndicate image"
      />
      {/* Start Input syndicate image Field */}

      {/* Buttons NEXT & Submit*/}
      {btnsPrevSubmit(2)}
    </div>
  );
  const { user } = props.auth;
  return (
    <form onSubmit={onFormSubmit}>
      {patientStep1}
      {patientStep2}
      {doctor}
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
