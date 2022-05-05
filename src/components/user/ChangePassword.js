import React from "react";
import { Modal, Button } from "react-bootstrap";
import AdditioningField from "../records/AdditioningField";
import style from "../../Css/records/Record.module.css";
import profileStyle from "../../Css/User/Profile.module.css";
import ProfileEditInput from "./ProfileEditInput";

function ChangePassword(props) {
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
        <div className={profileStyle.change_password}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div>
                <form className="form-group">
                  <ProfileEditInput
                    name="newPass"
                    labelName="New Password"
                    type="input"
                    placeholder="Add new password"
                  />
                  <ProfileEditInput
                    name="confirmPass"
                    labelName="Confirm Password"
                    type="input"
                    placeholder="Confirm your password"
                  />
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={style.add_btn}>
                        <button className="btn btn-primary mb-2">Submit</button>
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

export default ChangePassword;
