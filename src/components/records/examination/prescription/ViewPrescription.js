import React, { useEffect } from "react";
import columns from "./PrescriptionColumns";
import Table from "./../../Table";
import { getPrescriptions } from "../../../../actions/records/pescriptionaction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const ViewPrescription = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  const prescriptionTest = [
    {
      drug: "panadol",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
    {
      drug: "panadol",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
    {
      drug: "panadol",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
    {
      drug: "brufin",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 1,
    },
    {
      drug: "brufin",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 1,
    },
    {
      drug: "brufin",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 1,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
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
      columns={columns}
      data={prescriptions}
      click={clickhandler}
      PageName="Prescriptions"
    />
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  prescription: state.prescription,
});
export default connect(mapStateToProps, { getPrescriptions })(ViewPrescription);
