import React, { useEffect } from "react";
import SurgeryTable from "./SurgeryTable";
import data from "../data";
import { Link } from "react-router-dom";
import { getAllSurgery } from "../../../actions/records/surgeryAction";
import Loading from "./../../Loading";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

const Surgery = (props) => {
  const { surgeries, loading } = props.surgery;
  useEffect(() => {
    props.getAllSurgery();
  }, []);

  const centerText = <h1>There's no data yet</h1>;
  return (
    <div className="surgery">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="surgery-filter">
            <div className="surgery-filter-header">Surgery</div>
          </div>
        </div>
      </div>

      <div className="surgery-data">
        <div className="row">
          <div className="col-lg-12">
            <div className="add-surgery-btn">
              <Link
                to="/records/addsurgery"
                type="button"
                className="btn btn-primary"
              >
                Add Surgery
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="surgery-table">
              {/* <ExaminationTable /> */}

              <SurgeryTable data={surgeries} />
            </div>
          </div>
        </div>
      </div>
    </div>
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
