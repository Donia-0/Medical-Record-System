import React, { useEffect, useState } from "react";
import { faKey, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import RegisterInput from "./RegisterInput";
import ProtoTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import style from "../../Css/Authentication/Auth.module.css";
toast.configure();

const Signin = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const loginUser = {
      email: form.email,
      password: form.password,
    };
    props.loginUser(loginUser);
  };

  useEffect(() => {
    if (props.auth.isAuhtenticated) {
      navigate("/user/profile");
    }
  }, [props.auth.isAuhtenticated]);
  return (
    <React.Fragment>
      <div className={style.welcome_div}>
        <h1>Welcome</h1>
      </div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className={style.form_label}>
            Email address
          </label>
          <RegisterInput
            value={form.email}
            onChange={onInputChange}
            isHasIcon="yes"
            icon={faUserAlt}
            id="email"
            name="email"
            type="text"
            placeholder="user@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={style.form_label}>
            Password
          </label>
          <RegisterInput
            value={form.password}
            onChange={onInputChange}
            isHasIcon="yes"
            icon={faKey}
            id="password"
            name="password"
            type="password"
            placeholder="**************"
          />
        </div>
        <div className="form-btn" style={{ textAlign: "right" }}>
          <button type="submit" className={`btn ${style.btns_auth_steps}`}>
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

Signin.prototype = {
  loginUser: ProtoTypes.func.isRequired,
  auth: ProtoTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Signin);
