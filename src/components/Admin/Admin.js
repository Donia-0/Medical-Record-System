import React from "react";
import Navbar from "../layout/Navbar";
import data from "../records/data";
import RequestTable from "./RequestTable";

const Admin = () => {
  const clickhandler = (name) => console.log("delete", name);
  return (
    <div className="admin">
      <Navbar />
      <div className="requests" style={{ marginTop: "100px" }}>
        <RequestTable data={data} click={clickhandler} />
      </div>
    </div>
  );
};

export default Admin;
