import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faSearch } from "@fortawesome/free-solid-svg-icons";
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
  const [sentRequest, setSentRequest] = useState(false);

  const onInputChange = (e) => {
    setSearchItem(e.target.value);
  };
  const onClickRequest = () => {
    setSentRequest(true);
    const req = {
      id: patientProfile._id,
    };
    const res = axios.post("http://localhost:5000/doctor/sendmail", req);
    console.log(res.data);
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setSearchModelShow(true);
    const search = {
      nationalId: searchItem,
    };
    props.searchPatient(search);
  };
  const onReserClick = () => {
    setSearchItem("");
    props.clearPatientProfile();
  };
  useEffect(() => {
    if (searchItem.length < 14) {
      props.clearPatientProfile();
    }
  }, [searchItem]);
  const { patientProfile, loading } = props.patient;
  return (
    <div className={style.search_user}>
      <form onSubmit={onFormSubmit}>
        <div className={`form-group ${style.has_search}`}>
          <span className={`${style.form_control_navbar}`}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <span onClick={onReserClick} className={`${style.reset}`}>
            <FontAwesomeIcon icon={faRefresh} />
          </span>
          <input
            value={searchItem}
            onChange={onInputChange}
            name="nationalId"
            type="text"
            className="form-control"
            placeholder="Search Patient"
          />
        </div>
        <RequestAccessPatient
          user={patientProfile}
          loading={loading}
          show={SearchModelShow}
          sent={sentRequest.toString()}
          onHide={async () => {
            setSearchModelShow(false);
            setSentRequest(false);
          }}
          onSubmitClick={() => {
            setSearchModelShow(false);
          }}
          onClickRequest={onClickRequest}
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
