import React from "react";
import { Modal, Button } from "react-bootstrap";

function PrescriptionView(props) {
  const prescriptions = [
    { name: "mnsfnk", dose: 2 },
    { name: "mnsfnk", dose: 3 },
  ];

  const renderedPrescription = prescriptions.map((index) => {
    return (
      <div className="prescription-view">
        <div className="row form-container">
          <div className="col-lg-6">
            <div className="prescription-container">
              <div className="formlabel col-lg-3 col-md-12 col-sm-12">
                <label>Name: </label>
              </div>
              <div className="col-lg-9 col-sm-12">
                <input
                  name="prescription-name"
                  className="form-control"
                  type="text"
                  disabled
                  placeholder={index.name}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="prescription-container">
              <div className="formlabel col-lg-3 col-md-12 col-sm-12">
                <label>Dose: </label>
              </div>
              <div className="col-lg-9 col-sm-12">
                <input
                  name="prescription-dose"
                  className="form-control"
                  type="text"
                  disabled
                  placeholder={index.dose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderedPrescription}</Modal.Body>
      <Modal.Footer>
        <Button className="popup-close" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PrescriptionView;
