import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button } from "react-bootstrap";

function RequestsView(props) {
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
            <Button className="popup-close" onClick={props.onHide}>
              Request
            </Button>
            <Button className="popup-close" onClick={props.onHide}>
              Decline
            </Button>
          </Modal.Footer>
        </div>
      )}
    </Modal>
  );
}

export default RequestsView;
