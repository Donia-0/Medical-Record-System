// import React, { useState, useEffect } from "react";
// import bloodpreasure from "../../../images/records/bloodpressure/bloodp.png";
// import Fields from "../Fields";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addBloodPressure } from "./../../../actions/records/bloodPressureAction";
// const BloodPreasure = (props) => {
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({
//     Name: "",
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
//       Name: form.Name,
//     };
//     props.addBloodPressure(data);
//     setForm({
//       Name: "",
//     });
//   };
//   useEffect(() => {
//     setErrors({});
//     setErrors(props.errors);
//   }, [props.errors]);
//   return (
//     <div className="add-allergy">
//       <div className="row allergy-form">
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className="allergy-img-container">
//             <span className="allergy-header">Add allergy</span>
//             <div className="allergy-img">
//               {/* <img src={bloodpreasure} /> */}
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className="allergy-form">
//             <form className="form-group" onSubmit={onFormSubmit}>
//               <Fields
//                 value={form.Name}
//                 onChange={onInputChange}
//                 name="Name"
//                 labelName="Name"
//                 type="text"
//                 placeholder="Enter name"
//                 err={errors.Name}
//               />

//               <div className="row">
//                 <div className="col-lg-12 add-btn">
//                   <button className="btn btn-primary mb-2">Add</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// BloodPreasure.prototype = {
//   addBloodPressure: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });
// export default connect(mapStateToProps, { addBloodPressure })(BloodPreasure);
// // import React, { useState, useEffect } from "react";
// // import Fields from "../Fields";
// // import { connect } from "react-redux";
// // import { addExamination } from "../../../actions/records/examinationAction";
// // import { PropTypes } from "prop-types";
// // import classnames from "classnames";

// // const AddExamination = (props) => {
// //   const [form, setForm] = useState({
// //     diagnosis: "",
// //     symptoms: "",
// //     note: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const onInputChange = (e) => {
// //     const value = e.target.value;
// //     setForm({
// //       ...form,
// //       [e.target.name]: value,
// //     });
// //   };
// //   const onFormSubmit = (e) => {
// //     e.preventDefault();
// //     const newExamination = {
// //       diagnosis: form.diagnosis,
// //       symptoms: form.symptoms,
// //       note: form.note,
// //     };
// //     props.addExamination(newExamination);
// //     console.log(newExamination);
// //   };
// //   useEffect(() => {
// //     setErrors({});
// //     setErrors(props.errors);
// //   }, [props.errors]);
// //   return (
// //     <div className="add-examination">
// //       <div className="row">
// //         <div className="col-lg-12 col-md-12 col-sm-12">
// //           <div className="examination-container">
// //             <span className="add-examination-header">Add Allergy</span>
// //           </div>
// //         </div>
// //         <div className="col-lg-12 col-md-12 col-sm-12">
// //           <div className="add-examination-form">
// //             <form className="form-group" onSubmit={onFormSubmit}>
// //               <Fields
// //                 value={form.diagnosis}
// //                 onChange={onInputChange}
// //                 name="Name"
// //                 labelName="Name"
// //                 type="input"
// //                 placeholder="Enter name"
// //                 err={errors.diagnosis}
// //               />
// //               <div className="row">
// //                 <div className="col-lg-12 add-btn">
// //                   <button className="btn btn-primary mb-2">Add</button>
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // AddExamination.prototype = {
// //   addExamination: PropTypes.func.isRequired,
// //   errors: PropTypes.object.isRequired,
// //   auth: PropTypes.object.isRequired,
// // };
// // const mapStateToProps = (state) => ({
// //   auth: state.auth,
// //   newExamination: state.newExamination,
// //   errors: state.errors,
// // });
// // export default connect(mapStateToProps, { addExamination })(AddExamination);
