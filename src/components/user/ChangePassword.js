import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import style from "../../Css/User/Profile.module.css";
import ProfileEditInput from "./ProfileEditInput";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUser } from "./../../actions/profileAction";
function ChangePassword(props) {
  const [match, setMatch] = useState(true);
  const [form, setFrom] = useState({
    confirmPassword: "",
    password: "",
  });
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setFrom({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onSubmitClick = (e) => {
    e.preventDefault();
    var update = {
      password: form.password,
      confirmPassword: form.confirmPassword,
    };
    if (form.password === form.confirmPassword) {
      props.updateUser(update);
    } else {
      setMatch(false);
    }
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={style.change_password}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div>
                <form className="form-group">
                  <ProfileEditInput
                    value={form.password}
                    onChange={onInputChange}
                    name="password"
                    labelName="New Password"
                    type="input"
                    placeholder="Add new password"
                  />
                  <ProfileEditInput
                    value={form.confirmPassword}
                    onChange={onInputChange}
                    name="confirmPassword"
                    labelName="Confirm Password"
                    type="input"
                    placeholder="Confirm your password"
                    err={
                      match === false ? "Confirm password doesn't match" : ""
                    }
                  />
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={style.change_password_submit}>
                        <button
                          onClick={onSubmitClick}
                          className="btn btn-primary mb-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(null, { updateUser })(ChangePassword);
