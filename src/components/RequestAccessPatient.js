import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";
import { verified } from "../actions/PatientAction";
import { connect } from "react-redux";
import { classNames } from "classnames";
import style from "../Css/User/Request.module.css";
function RequestsView(props) {
  const [submit, setSubmit] = useState("");
  const onCheckCode = async () => {
    const req = {
      id: props.user._id,
      check: submit,
    };
    props.verified(req);
    props.onSubmitClick();
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="">
          {!props.user ? (
            "User not found"
          ) : (
            <span>
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  marginRight: "5px",
                  fontSize: "22px",
                  color: "#2a7f82",
                }}
              />
              {props.user.name}
            </span>
          )}
        </Modal.Title>
      </Modal.Header>
      {!props.user ? null : (
        <div>
          <Modal.Body>
            <div className="request-access-view">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="request-access-body">
                    <div>E-mail: {props.user.email}</div>
                    <div>Age: {props.user.date}</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {props.sent === "true" ? (
              <div className="row">
                <div className={`col-lg-8 ${style.input_access}`}>
                  <input
                    placeholder="Verfication Code"
                    onChange={(e) => {
                      setSubmit(e.target.value);
                    }}
                    value={submit}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-3">
                  <Button
                    onClick={onCheckCode}
                    placeholder="Write code here"
                    className="popup-close"
                  >
                    submit
                  </Button>
                </div>
              </div>
            ) : (
              <Button onClick={props.onClickRequest} className="popup-close">
                Request
              </Button>
            )}
          </Modal.Footer>
        </div>
      )}
    </Modal>
  );
}

export default connect(null, { verified })(RequestsView);
