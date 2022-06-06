import React, { useEffect } from "react";
import Navbar from "../layout/Navbar";
import data from "../records/data";
import RequestTable from "./RequestTable";
import { getRequests } from "../../actions/adminAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Admin = (props) => {
  const clickhandler = (name) => console.log("delete", name);
  useEffect(() => {
    props.getRequests();
  }, []);

  const { usersRequests } = props.admin.requests;
  return (
    <div className="admin">
      <Navbar />
      <div className="requests" style={{ marginTop: "100px" }}>
        <RequestTable data={usersRequests || []} click={clickhandler} />
      </div>
    </div>
  );
};

const mapStateToProp = (state) => ({
  auth: state.auth,
  admin: state.admin,
});
export default connect(mapStateToProp, { getRequests })(Admin);
