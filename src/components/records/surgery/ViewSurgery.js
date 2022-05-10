import React, { useEffect } from "react";
import { getAllSurgery } from "../../../actions/records/surgeryAction";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import columns from "./SurgeryColumns";
import Table from "./../Table";

const Surgery = (props) => {
  const { surgeries, loading } = props.surgery;
  const clickhandler = (name) => console.log("delete", name);

  useEffect(() => {
    props.getAllSurgery();
  }, []);

  return (
    <Table
      link="./addsurgery"
      columns={columns}
      data={surgeries}
      click={clickhandler}
      PageName="Surgery"
    />
  );
};

Surgery.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllSurgery: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  surgery: state.surgery,
});
export default connect(mapStateToProps, { getAllSurgery })(Surgery);
