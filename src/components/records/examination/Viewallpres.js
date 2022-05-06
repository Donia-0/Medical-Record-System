import React from "react";
import data from "../data";
import PrescriptionsTable from "./PrescriptionsTable";

const Viewallpres = () => {
  const clickhandler = (name) => console.log("delete", name);

  return (
    <div className="Prescriptions">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="prescriptions-header">All Prescriptions</div>
        </div>
      </div>

      <div className="allprescriptions-data">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="allprescriptions-table">
              <PrescriptionsTable data={data} click={clickhandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewallpres;
