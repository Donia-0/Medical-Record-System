import React, { useState, useEffect } from "react";
import style from "../../../Css/records/Record.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faList, faListUl } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getAllergies } from "../../../actions/records/allergyAction";
import PropTypes from "prop-types";
const ViewAllergy = (props) => {
  const { allergies, loading } = props.allergy;

  useEffect(() => {
    props.getAllergies();
  }, []);

  var renderedAllergies;
  if (!loading && allergies.length !== 0) {
    renderedAllergies = allergies.map((allergy) => {
      return (
        <div key={allergy._id} className="col-lg-6 col-md-6 col-sm-6">
          <span className={style.single_allergy}>
            <FontAwesomeIcon className={style.allergy_icon} icon={faCircle} />
            {allergy.name}
          </span>
        </div>
      );
    });
  } else {
    renderedAllergies = (
      <div style={{ width: "100%", textAlign: "center", fontSize: "15px" }}>
        There is no allergies yet
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className={style.record_container_header}>
          <span className={style.add_record_header}>
            <FontAwesomeIcon icon={faList} /> List Of Allergies
          </span>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className={`row ${style.allergy_list_container}`}>
          {renderedAllergies}
        </div>
      </div>
    </div>
  );
};
ViewAllergy.propTypes = {
  getAllergies: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  allergy: state.allergy,
});
export default connect(mapStateToProps, { getAllergies })(ViewAllergy);
