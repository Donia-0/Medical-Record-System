// import React from "react";
// import { Modal, Button } from "react-bootstrap";

// function PrescriptionView(props) {
//   const prescriptions = [
//     { name: "mnsfnk", dose: 2 },
//     { name: "mnsfnk", dose: 3 },
//   ];

//   const renderedPrescription = prescriptions.map((index) => {
//     return (
//       <div className="prescription-view">
//         <div className="row form-container">
//           <div className="col-lg-6">
//             <div className="prescription-container">
//               <div className="formlabel col-lg-3 col-md-12 col-sm-12">
//                 <label>Name: </label>
//               </div>
//               <div className="col-lg-9 col-sm-12">
//                 <input
//                   name="prescription-name"
//                   className="form-control"
//                   type="text"
//                   disabled
//                   placeholder={index.name}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="prescription-container">
//               <div className="formlabel col-lg-3 col-md-12 col-sm-12">
//                 <label>Dose: </label>
//               </div>
//               <div className="col-lg-9 col-sm-12">
//                 <input
//                   name="prescription-dose"
//                   className="form-control"
//                   type="text"
//                   disabled
//                   placeholder={index.dose}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>{renderedPrescription}</Modal.Body>
//       <Modal.Footer>
//         <Button className="popup-close" onClick={props.onHide}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default PrescriptionView;

import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FilterModal from "./FilterModal";
import data from "./data";
import { Link } from "react-router-dom";
import PrescriptionTable from "./examination/PrescriptionTable";

const PrescriptionView = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const clickhandler = (name) => console.log("delete", name);

  return (
    <div className="examination">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="examination-filter">
            <div className="examination-filter-header">Examination</div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="examination-filer-button">
                  <button
                    className="btn-primary"
                    onClick={() => setModalShow(true)}
                  >
                    <FontAwesomeIcon icon={faFilter} /> Add filter
                  </button>

                  <FilterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="examination-data">
        <div className="row">
          <div className="col-lg-12">
            <div className="add-examination-btn">
              <Link
                to="./addExamination"
                type="button"
                className="btn btn-primary"
              >
                Add Examination
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="examination-table">
              {/* <ExaminationTable /> */}
              <PrescriptionTable data={data} click={clickhandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionView;
