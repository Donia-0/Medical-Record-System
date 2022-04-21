import React from "react";
import Navbar from "../layout/Navbar";
import data from "../records/data";
import RequestTable from "./RequestTable";

const Admin = () => {
  const clickhandler = (name) => console.log("delete", name);
  return (
    <div className="content">
      <div className="row">
        <div className="nav col-lg-12">
          <Navbar />
        </div>
      </div>
      <div className="table">
        <div className="request-table col-lg-12">
          <RequestTable data={data} click={clickhandler} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
