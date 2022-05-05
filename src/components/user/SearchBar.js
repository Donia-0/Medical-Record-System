import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RequestAccessPatient from "../RequestAccessPatient";
import style from "../../Css/Navbar.module.css";

export default function SearchBar() {
  const [searchItem, setSearchItem] = React.useState("");
  const [SearchModelShow, setSearchModelShow] = React.useState(false);

  const onInputChane = (e) => {
    setSearchItem(e.target.value);
  };
  const x = () => {
    return <div style={{ background: "red", width: "100%" }}>Hello</div>;
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchModelShow(true);
  };
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
          show={SearchModelShow}
          onHide={() => {
            setSearchModelShow(false);
          }}
        />
      </form>
    </div>
  );
}
