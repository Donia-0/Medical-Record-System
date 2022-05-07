// import React, { useState, useEffect } from "react";
// import Glucose from "../../../images/glucose.png";
// import Fields from "../Fields";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { addGlucose } from "../../../actions/records/glucoseAction";
// import style from "../../../Css/records/Records.module.css";

// const GlucoseMeasure = (props) => {
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({
//     type: "",
//     result: "",
//     date: "",
//     note: "",
//   });
//   useEffect(() => {
//     setErrors({});
//     setErrors(props.errors);
//   }, [props.errors]);
//   const onInputChange = (e) => {
//     const value = e.target.value;
//     setForm({
//       ...form,
//       [e.target.name]: value,
//     });
//   };
//   const onFormSubmit = (e) => {
//     e.preventDefault();
//     const newGlucose = {
//       type: form.type,
//       result: form.result,
//       date: form.date,
//       note: form.note,
//     };
//     props.addGlucose(newGlucose);
//   };
//   return (
//     <div className={style.add_record}>
//       <div className={`${style.record_form} row`}>
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className={style.record_img_container}>
//             <span className={style.record_header}>Glucose</span>
//             <div className={style.record_img}>
//               <img src={Glucose} />
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className={style.record_form}>
//             <form className="form-group" onSubmit={onFormSubmit}>
//               <div className={`${style.form_container} row`}>
//                 <div className="formlabel col-lg-3 col-md-12 col-sm-12">
//                   <label>Type: </label>
//                 </div>
//                 <div className="col-lg-9 col-sm-12">
//                   <select className="form-select">
//                     <option>Choose</option>
//                     <option value="rabdom-bs">Random blood suger</option>
//                     <option value="fasting-bs">Fasting blood suger</option>
//                     <option value="post-prandial-bs">
//                       Post prandial blood suger (2hr)
//                     </option>
//                   </select>
//                 </div>
//               </div>
//               <Fields
//                 value={form.result}
//                 onChange={onInputChange}
//                 name="result"
//                 labelName="Result"
//                 type="number"
//                 err={errors.result}
//                 placeholder="Enter result"
//               />
//               <Fields
//                 value={form.date}
//                 onChange={onInputChange}
//                 name="date"
//                 labelName="Date"
//                 type="date"
//               />
//               <div className={`${style.form_container} row`}>
//                 <div className={`${style.formlabel} col-lg-3`}>
//                   <label htmlFor="note">Note:</label>
//                 </div>
//                 <div className="col-lg-9">
//                   <textarea
//                     value={form.note}
//                     onChange={onInputChange}
//                     name="note"
//                     id="note"
//                     className="form-control"
//                     rows={3}
//                     placeholder="Any notes !... "
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className={`col-lg-12 ${style.add_btn}`}>
//                   <button type="submit" className="btn btn-primary mb-2">
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// GlucoseMeasure.propTypes = {
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
//   addGlucose: PropTypes.func.isRequired,
// };
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { addGlucose })(GlucoseMeasure);

// import React, { useState, useEffect } from "react";
// import bloodpreasure from "../../../images/records/bloodpressure/bloodp.png";
// import Fields from "../Fields";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import {
//   addBloodPressure,
//   getBloodPressureDetailById,
// } from "./../../../actions/records/bloodPressureAction";
// import moment from "moment-timezone";
// import NoteField from "../NoteField";
// import style from "../../../Css/records/Record.module.css";
// import { useParams } from "react-router";
// const BloodPreasure = (props) => {
//   const { bloodpId, name } = useParams();
//   const [errors, setErrors] = useState({});
//   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   const currentTime = moment().tz(timezone).format("yyyy-MM-DDThh:mm");
//   const [form, setForm] = useState({
//     systolic: "",
//     diastolic: "",
//     pulse: "",
//     note: "",
//     date: currentTime,
//   });
//   const [bloodDetail, setBloodDetail] = useState({});

//   useEffect(() => {
//     setErrors({});
//     setErrors(props.errors);
//   }, [props.errors]);

//   useEffect(() => {
//     props.getBloodPressureDetailById(bloodpId);
//   }, []);

//   const { bloodPressureDetail } = props.bloodpressures;
//   console.log(bloodPressureDetail);
//   useEffect(() => {
//     if (bloodPressureDetail && bloodpId) {
//       setForm({
//         systolic: bloodPressureDetail.systolic,
//         diastolic: bloodPressureDetail.diastolic,
//         pulse: bloodPressureDetail.pulse,
//         note: bloodPressureDetail.note,
//         date: moment(bloodPressureDetail.date).format("MMMM Do YYYY"),
//       });
//     }
//   }, [bloodPressureDetail]);
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
//       systolic: form.systolic,
//       diastolic: form.diastolic,
//       pulse: form.pulse,
//       note: form.note,
//       date: form.date,
//     };
//     props.addBloodPressure(data);
//     setForm({
//       systolic: "",
//       diastolic: "",
//       pulse: "",
//       note: "",
//       date: currentTime,
//     });
//   };

//   return (
//     <div className={style.add_record_form_container}>
//       <div className={`${style.add_record} row`}>
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           {/* <div className={style.record_img_container}> */}
//           <span className={style.record_container_header}>{props.header}</span>
//           {/* <div className={style.record_img}>
//             <img src={bloodpreasure} />
//           </div> */}
//           {/* </div> */}
//         </div>
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className={style.add_record_form}>
//             <form className="form-group" onSubmit={onFormSubmit}>
//               <Fields
//                 value={form.systolic}
//                 onChange={onInputChange}
//                 name="systolic"
//                 labelName="Systolic"
//                 type="number"
//                 placeholder="120"
//                 err={errors.systolic}
//               />
//               <Fields
//                 value={form.diastolic}
//                 onChange={onInputChange}
//                 name="diastolic"
//                 labelName="Diastolic"
//                 type="number"
//                 placeholder="80"
//                 err={errors.diastolic}
//               />
//               <Fields
//                 value={form.pulse}
//                 onChange={onInputChange}
//                 name="pulse"
//                 labelName="Pulse"
//                 type="number"
//                 placeholder="0"
//                 err={errors.pulse}
//               />
//               <Fields
//                 value={form.date}
//                 onChange={onInputChange}
//                 name="date"
//                 labelName="Date"
//                 type={bloodPressureDetail ? "text" : "datetime-local"}
//                 disabled={true}
//               />
//               <NoteField
//                 labelName="Note"
//                 value={form.note}
//                 onChange={onInputChange}
//                 name="note"
//                 id="note"
//                 rows={3}
//                 placeholder="Any notes !..."
//                 err={errors.note}
//               />
//               {/* <div className={`row ${style.form_container}`}>
//                 <div className={`${style.formlabel} col-lg-3`}>
//                   <label htmlFor="note">Note:</label>
//                 </div>
//                 <div className="col-lg-9">
//                   <textarea
//                     value={form.note}
//                     onChange={onInputChange}
//                     name="note"
//                     id="note"
//                     className="form-control"
//                     rows={3}
//                     placeholder="Any notes !... "
//                   ></textarea>
//                 </div>
//               </div> */}
//               <div className="row">
//                 <div className={`col-lg-12 ${style.add_btn}`}>
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
//   getBloodPressureDetailById: PropTypes.func.isRequired,
// };
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
//   bloodpressures: state.bloodpressures,
// });
// export default connect(mapStateToProps, {
//   addBloodPressure,
//   getBloodPressureDetailById,
// })(BloodPreasure);

import React, { useState, useEffect } from "react";
import {
  addBloodPressure,
  getBloodPressureDetailById,
} from "./../../../actions/records/bloodPressureAction";
import Glucose from "../../../images/glucose.png";
import moment from "moment-timezone";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import AdditioningField from "../AdditioningField";
import NoteField from "../NoteField";
import style from "../../../Css/records/Record.module.css";
import { useParams } from "react-router";

const GlucoseMeasure = (props) => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    type: "",
    result: "",
    date: "",
    note: "",
  });
  useEffect(() => {
    setErrors({});
    setErrors(props.errors);
  }, [props.errors]);
  const onInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newGlucose = {
      type: form.type,
      result: form.result,
      date: form.date,
      note: form.note,
    };
    props.addGlucose(newGlucose);
  };
  return (
    <div className={style.add_record_form_container}>
      <div className={style.add_record}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.record_img_container}>
              <div className={style.record_container_header}>
                <div className={style.record_img}>
                  <img src={Glucose} />
                </div>
                <span className={style.add_record_header}>{props.header}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.add_record_form}>
              <form className="form-group" onSubmit={onFormSubmit}>
                <div className="formlabel col-lg-3 col-md-12 col-sm-12">
                  <label
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#2a7f82",
                    }}
                  >
                    Type:{" "}
                  </label>
                </div>
                <div className="col-lg-9 col-sm-12">
                  <select
                    className="form-select"
                    style={{
                      width: "133%",
                      marginBottom: "8px",
                      color: "#212529",
                    }}
                  >
                    <option>Choose</option>
                    <option value="rabdom-bs">Random blood suger</option>
                    <option value="fasting-bs">Fasting blood suger</option>
                    <option value="post-prandial-bs">
                      Post prandial blood suger (2hr)
                    </option>
                  </select>
                </div>
                <AdditioningField
                  value={form.result}
                  onChange={onInputChange}
                  name="result"
                  labelName="Result"
                  type="number"
                  err={errors.result}
                  placeholder="Enter result"
                />
                <AdditioningField
                  value={form.date}
                  onChange={onInputChange}
                  name="date"
                  labelName="Date"
                  type="date"
                  err={errors.date}
                />
                <NoteField
                  labelName="Note"
                  value={form.note}
                  onChange={onInputChange}
                  name="note"
                  id="note"
                  rows={2}
                  placeholder="Any notes !..."
                  err={errors.note}
                />
                <div className="row">
                  <div className="col-lg-12">
                    <div className={style.add_btn}>
                      <button className="btn btn-primary mb-2">Add</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
GlucoseMeasure.prototype = {
  addBloodPressure: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getBloodPressureDetailById: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  bloodpressures: state.bloodpressures,
});
export default connect(mapStateToProps, {
  addBloodPressure,
  getBloodPressureDetailById,
})(GlucoseMeasure);
