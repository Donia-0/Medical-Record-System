import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  prescriptionAdd,
  getPrescriptionById,
  updatePrescription,
} from "../../../../actions/records/pescriptionaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdditioningField from "../../AdditioningField";
import { useParams } from "react-router";
import style from "../../../../Css/records/Record.module.css";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
const FormPrescription = (props) => {
  const navigate = useNavigate();

  const { examId, prescriptionId } = useParams();
  const [form, setForm] = useState({
    drugName: "",
    dose: "",
    note: "",
  });
  const [inputList, setInputList] = useState([form]);
  useEffect(() => {
    AOS.init();
    props.getPrescriptionById(prescriptionId);
  }, []);
  const { isAuhtenticated, user } = props.auth;
  useEffect(() => {
    if (user.role != 1) {
      navigate("/notfound");
    }
  }, []);
  const { prescriptionDetail } = props.prescription;
  useEffect(() => {
    if (prescriptionDetail && prescriptionId) {
      setForm({
        drugName: prescriptionDetail.drugName,
        dose: prescriptionDetail.dose,
        note: prescriptionDetail.note,
      });
    }
  }, [prescriptionDetail]);

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, form]);
    setForm({ drugName: "", dose: "", note: "" });
  };
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    var data = {
      drugName: form.drugName,
      dose: form.dose,
      note: form.note,
      userId: localStorage.getItem("patientId"),
    };

    if (prescriptionDetail && prescriptionId) {
      props.updatePrescription(prescriptionId, data, navigate);
    } else {
      if (examId) {
        data = {
          ...data,
          examinationId: examId,
        };
      } else {
        data = {
          ...data,
          examinationId: props.examination.newExamination.newExamination._id,
        };
      }
      props.prescriptionAdd(data);
    }
  };
  return (
    <div
      className={
        inputList.length > 1
          ? `${style.add_record_form_container} child-height`
          : `${style.add_record_form_container}`
      }
    >
      <div className={style.add_record}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.record_container_header}>
              <span className={style.add_record_header}>{props.header}</span>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.add_record_form}>
              <form
                className="form-group"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                onSubmit={onFormSubmit}
              >
                {inputList.map((x, i) => {
                  return (
                    <div key={i}>
                      <AdditioningField
                        value={form.drugName}
                        onChange={onInputChange}
                        name="drugName"
                        labelName="Drug"
                        type="text"
                        placeholder="Enter drug name"
                      />
                      <AdditioningField
                        value={form.dose}
                        onChange={onInputChange}
                        name="dose"
                        labelName="Dose"
                        type="number"
                        placeholder="Enter dose "
                      />
                      <div className="row form-container">
                        <div className="formlabel col-lg-12">
                          <label htmlFor="note">Note:</label>
                        </div>
                        <div className="col-lg-12">
                          <textarea
                            value={form.note}
                            onChange={onInputChange}
                            name="note"
                            id="date"
                            className="form-control"
                            rows={3}
                            placeholder="Any notes !... "
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className={style.btns_pres}>
                            {inputList.length !== 1 && (
                              <button
                                className={`btn ${style.btn_addRemove_pres}`}
                                onClick={() => handleRemoveClick(i)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            )}
                            {inputList.length - 1 === i && (
                              <button
                                onClick={handleAddClick}
                                className={`btn ${style.btn_addRemove_pres}`}
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="row">
                  <div className="col-lg-12">
                    <div className={style.add_btn}>
                      <button className="btn">Submit</button>
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

FormPrescription.prototype = {
  prescriptionAdd: PropTypes.func.isRequired,
  updatePrescription: PropTypes.func.isRequired,
  getPrescriptionById: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  examination: state.examination,
  prescription: state.prescription,
});
export default connect(mapStateToProps, {
  prescriptionAdd,
  getPrescriptionById,
  updatePrescription,
})(FormPrescription);
