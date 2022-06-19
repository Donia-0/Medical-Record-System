import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import data from "../records/data";
import RequestTable from "./RequestTable";
import { getRequests } from "../../actions/adminAction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./../Loading";

const Admin = (props) => {
  const navigate = useNavigate();
  const [load, setload] = useState(false);

  const clickhandler = (name) => console.log("delete", name);
  useEffect(() => {
    props.getRequests();
  }, []);
  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 2700);
  }, []);
  const { isAuhtenticated, user } = props.auth;
  useEffect(() => {
    if (user.role !== 2) {
      navigate("/notfound");
    }
  }, []);
  const { usersRequests } = props.admin.requests;
  return (
    <div className="admin">
      {load ? (
        <Loading loading={load} />
      ) : (
        <>
          {" "}
          <Navbar />
          <div className="container">
            <div className="requests" style={{ marginTop: "100px" }}>
              <RequestTable data={usersRequests || []} click={clickhandler} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProp = (state) => ({
  auth: state.auth,
  admin: state.admin,
});
export default connect(mapStateToProp, { getRequests })(Admin);
