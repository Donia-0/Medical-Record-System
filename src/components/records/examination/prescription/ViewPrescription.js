import React, { useEffect } from "react";
import columns from "./PrescriptionColumns";
import Table from "./../../Table";
import { getPrescriptions } from "../../../../actions/records/pescriptionaction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import prescriptionImage from "../../../../images/medicine.png";
import ConditionalView from "../../ConditionalView";
const ViewPrescription = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  const prescriptionTest = [
    {
      diagnosis: "hhh",
      drug: "panadol",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
  ];
  useEffect(() => {
    if (localStorage.patientId) {
      const userData = {
        patientId: localStorage.getItem("patientId"),
      };
      props.getPrescriptions(userData);
    } else {
      props.getPrescriptions();
    }
  }, []);
  const { prescriptions } = props.prescription;
  return (
    <Table
      link="./addprescription"
      img={prescriptionImage}
      columns={ConditionalView(columns)}
      data={prescriptions}
      click={clickhandler}
      PageName="Prescriptions"
      haveImage={true}
    />
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  prescription: state.prescription,
});
export default connect(mapStateToProps, { getPrescriptions })(ViewPrescription);
