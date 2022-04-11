import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button } from "react-bootstrap";
const FilterModal = (props) => {
  const Departments = [
    "Urologia",
    "Orthopedics",
    "Otorhinolaryngology",
    "Neurosurgery",
    "Psychiatry",
    "Pulmonology",
    "Pediatrics",
    "Radiology",
    "General Surgery",
    "Cardiothoracic surgery",
    "Internal Medicine",
    "Tropical Medicine",
    "Clinical Pathology",
    "Plastic Surgery",
    "Vascular Surgery",
    "Medical Genetics",
    "Ophthalmology and Surgery",
    "Obstetrics And Gynaecology",
    "Cardiology And Angiology",
    "Dermatology And Infertility",
    "Geriatrics And Gerontology",
    "Oncology And Nuclear Medicine",
    "Physical Medicine And Rehabilitation",
  ];

  const renderedDepartments = Departments.map((department) => {
    return (
      <div key={department} className="department-container">
        <div className="department-name">
          <span>
            {department}
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          </span>
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
          Examination Filter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="departments-filter">{renderedDepartments}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="popup-close" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
