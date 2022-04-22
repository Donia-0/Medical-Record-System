import React from "react";
import { Modal, Button } from "react-bootstrap";
import RequestsViewField from "./RequestsViewField";
import bloodpreasure from "../../images/records/bloodpressure/bloodp.png";

function RequestsView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Requests View
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="requests-view">
          <div className="row form-container">
            <div className="col-lg-6">
              <RequestsViewField
                name="birthdate"
                labelName="BirthDate"
                type="text"
                placeholder="16/6/1980"
              />
            </div>
            <div className="col-lg-6">
              <RequestsViewField
                name="gender"
                labelName="Gender"
                type="text"
                placeholder="Male"
              />
            </div>

            <div className="col-lg-6">
              <RequestsViewField
                name="nationalId"
                labelName="National Id"
                type="text"
                placeholder="123456789"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="requests-imgs">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={bloodpreasure}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Syndicate image</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="requests-imgs">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={bloodpreasure}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">National ID image</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="popup-close" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RequestsView;
