import React from "react";
import columns from "./PrescriptionColumns";
import Table from "./../../Table";

const ViewPrescription = () => {
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
  return (
    <Table
      link="./addprescription"
      columns={columns}
      data={prescriptionTest}
      click={clickhandler}
      PageName="Prescriptions"
    />
  );
};

export default ViewPrescription;
