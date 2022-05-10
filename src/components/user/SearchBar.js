import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RequestAccessPatient from "../RequestAccessPatient";
import style from "../../Css/Navbar.module.css";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  searchPatient,
  clearPatientProfile,
} from "./../../actions/PatientAction";
const SearchBar = (props) => {
  const [searchItem, setSearchItem] = useState("");

  const [SearchModelShow, setSearchModelShow] = useState(false);

  const onInputChane = (e) => {
    setSearchItem(e.target.value);
  };
  const [patient, setPatient] = useState({});
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setSearchModelShow(true);
    const search = {
      nationalId: searchItem,
    };
    props.searchPatient(search);
  };
  const { patientProfile } = props.patient;
  return (
    <div className={style.search_user}>
      <form onSubmit={onFormSubmit}>
        <div className={`form-group ${style.has_search}`}>
          <span className={`fa fa-search ${style.form_control_navbar}`}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            onChange={onInputChane}
            name="nationalId"
            type="text"
            className="form-control"
            placeholder="Search Patient"
          />
        </div>
        <RequestAccessPatient
          user={patientProfile}
          show={SearchModelShow}
          onHide={() => {
            setSearchModelShow(false);
            props.clearPatientProfile();
          }}
        />
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  patient: PropTypes.object.isRequired,
  searchPatient: PropTypes.func.isRequired,
  clearPatientProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  patient: state.patient,
});
export default connect(mapStateToProps, {
  searchPatient,
  clearPatientProfile,
})(SearchBar);
