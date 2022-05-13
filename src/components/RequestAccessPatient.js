import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";

function RequestsView(props) {
  const [submit, setSubmit] = useState("");
  const [verified, setVerified] = useState(false);
  const onCheckCode = async () => {
    const req = {
      id: props.user._id,
      check: submit,
    };

    const response = await axios.post(
      "http://localhost:5000/doctor/verify",
      req
    );
    setVerified(response.data.verify);
  };
  console.log(verified);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="request-access-modal-title"
        >
          {!props.user ? (
            "User not found"
          ) : (
            <span>
              <FontAwesomeIcon icon={faUser} />
              {props.user.name}
            </span>
          )}
        </Modal.Title>
      </Modal.Header>
      {!props.user && !props.loading ? null : (
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
                <div className="col-lg-6">
                  <input
                    onChange={(e) => {
                      setSubmit(e.target.value);
                    }}
                    value={submit}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
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

export default RequestsView;
