import React from "react";
import { Modal, Button } from "react-bootstrap";

const AcceptTerm = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Accept The Term
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4> Accept The Term</h4> */}
        <p>
          I have read, understood and i accept and agree to comply with the term
          of use
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="popup-close">
          Accept
        </Button>
        <Button onClick={props.onHide} className="popup-close">
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AcceptTerm;
