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
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Request Access
        </Modal.Title> */}
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="request-access-modal-title"
        >
          <FontAwesomeIcon icon={faUser} /> Hussein Salah
          {/* <input type="text" className="form-control" />
          <Button className="search-patient-btn">Search</Button> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="request-access-view">
          <div className="row">
            {/* <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="request-access-header">
                <h4>Hussein Salah</h4>
              </div>
            </div> */}
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="request-access-body">
                <div>E-mail: husseinsalah@gmail.com</div>
                <div>Age: 22</div>
                {/* <button className="btn btn-primary mb-2 request-access-btn">
                  Request
                </button> */}
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
        {/* <Button className="popup-close" onClick={props.onHide}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default RequestsView;
