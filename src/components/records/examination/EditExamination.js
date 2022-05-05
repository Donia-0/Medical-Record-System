import React, { useState, useEffect } from "react";
import bloodpreasure from "../../../images/records/bloodpressure/bloodp.png";
import Fields from "../Fields";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { addBloodPressure } from "./../../../actions/records/bloodPressureAction";
import { editExamination } from "./../../../actions/records/examinationAction";
// import moment from "moment-timezone";

const EditExamination = (props) => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    diagnosis: "",
    symptoms: "",
    note: "",
  });
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      diagnosis: form.diagnosis,
      symptoms: form.symptoms,
      note: form.note,
    };
    props.addBloodPressure(data);
    setForm({
      diagnosis: "",
      symptoms: "",
      note: "",
    });
  };
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);

  return (
    <div className="edit-examination">
      <div className="row edit-examination-form">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="edit-examination-container">
            <span className="edit-examination-header">Update Examination</span>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="edit-exam-form">
            <form className="form-group" onSubmit={onFormSubmit}>
              <Fields
                value={form.diagnosis}
                onChange={onInputChange}
                name="diagnosis"
                labelName="Diagnosis"
                type="input"
                placeholder="Add diagnosis"
                err={errors.diagnosis}
              />
              <div className="row form-container">
                <div className="formlabel col-lg-3">
                  <label htmlFor="symptoms">Symptoms:</label>
                </div>
                <div className="col-lg-9">
                  <textarea
                    value={form.symptoms}
                    onChange={onInputChange}
                    name="symptoms"
                    id="symptoms"
                    className="form-control"
                    rows={3}
                    placeholder="Add Symptoms... "
                  ></textarea>
                </div>
              </div>
              <div className="row form-container">
                <div className="formlabel col-lg-3">
                  <label htmlFor="note">Note:</label>
                </div>
                <div className="col-lg-9">
                  <textarea
                    value={form.note}
                    onChange={onInputChange}
                    name="Note"
                    id="note"
                    className="form-control"
                    rows={3}
                    placeholder="Any notes !... "
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 add-btn">
                  <button className="btn btn-primary mb-2">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

EditExamination.prototype = {
  editExamination: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { editExamination })(EditExamination);

// ===============================================================================================================
// import { Modal, Button } from "react-bootstrap";
// import React, { useState, useEffect } from "react";
// import Fields from "../Fields";

// function EditExamination(props) {
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({
//     diagnosis: "",
//     symptoms: "",
//     note: "",
//   });
//   const onInputChange = (evt) => {
//     const value = evt.target.value;
//     setForm({
//       ...form,
//       [evt.target.name]: value,
//     });
//   };
//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       diagnosis: form.diagnosis,
//       symptoms: form.symptoms,
//       note: form.note,
//     };
//     props.addBloodPressure(data);
//     setForm({
//       diagnosis: "",
//       symptoms: "",
//       note: "",
//     });
//   };
//   useEffect(() => {
//     setErrors({});
//     setErrors(props.errors);
//   }, [props.errors]);

//   const renderedexaminationedit = renderedexaminationedit.map((index) => {
//     return (
//       <div className="edit-examination">
//         <div className="row edit-examination-form">
//           <div className="col-lg-12 col-md-12 col-sm-12">
//             <div className="edit-examination-container">
//               <span className="edit-examination-header">
//                 Update Examination
//               </span>
//             </div>
//           </div>
//           <div className="col-lg-12 col-md-12 col-sm-12">
//             <div className="edit-exam-form">
//               <form className="form-group" onSubmit={onFormSubmit}>
//                 <Fields
//                   value={form.diagnosis}
//                   onChange={onInputChange}
//                   name="diagnosis"
//                   labelName="Diagnosis"
//                   type="input"
//                   placeholder="Add diagnosis"
//                   err={errors.diagnosis}
//                 />
//                 <div className="row form-container">
//                   <div className="formlabel col-lg-3">
//                     <label htmlFor="symptoms">Symptoms:</label>
//                   </div>
//                   <div className="col-lg-9">
//                     <textarea
//                       value={form.symptoms}
//                       onChange={onInputChange}
//                       name="symptoms"
//                       id="symptoms"
//                       className="form-control"
//                       rows={2}
//                       placeholder="Add Symptoms... "
//                     ></textarea>
//                   </div>
//                 </div>
//                 <div className="row form-container">
//                   <div className="formlabel col-lg-3">
//                     <label htmlFor="note">Note:</label>
//                   </div>
//                   <div className="col-lg-9">
//                     <textarea
//                       value={form.note}
//                       onChange={onInputChange}
//                       name="Note"
//                       id="note"
//                       className="form-control"
//                       rows={3}
//                       placeholder="Any notes !... "
//                     ></textarea>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-12 add-btn">
//                     <button className="btn btn-primary mb-2">Submit</button>
//                   </div>
//                 </div>
//               </form>
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
//           Update Examination
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>{renderedexaminationedit}</Modal.Body>
//       <Modal.Footer>
//         <Button className="popup-close" onClick={props.onHide}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditExamination;
