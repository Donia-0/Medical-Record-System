import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPrescriptionForEachExamination } from "../../../actions/records/pescriptionaction";

const PrescriptionView = (props) => {
  const { prescriptionsForEachExamination } = props.prescription;

  useEffect(() => {
    const userData = {
      examinationId: props.examId,
    };
    props.getPrescriptionForEachExamination(userData);
  }, []);
  const renderedPrescription = prescriptionsForEachExamination.map((pres) => {
    return (
      <div key={pres._id} className="prescription-view">
        <div className="row form-container">
          <div className="col-lg-6">
            <div className="prescription-container">
              <div className="formlabel col-lg-3 col-md-12 col-sm-12">
                <label>Name:</label>
              </div>
              <div className="col-lg-9 col-sm-12">
                <input
                  name="prescription-name"
                  className="form-control"
                  type="text"
                  disabled
                  value={pres.drugName}
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
                  value={pres.dose}
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
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Prescriptions
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
};

PrescriptionView.propTypes = {
  getPrescriptionForEachExamination: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  prescription: state.prescription,
});
export default connect(mapStateToProps, { getPrescriptionForEachExamination })(
  PrescriptionView
);
