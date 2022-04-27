import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import isEmpty from "./../../validation/isEmpty";
import PrescriptionView from "../records/PrescriptionView";

export default function SearchBar() {
  const [searchItem, setSearchItem] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const onInputChane = (e) => {
    setSearchItem(e.target.value);
  };
  const x = () => {
    return <div style={{ background: "red", width: "100%" }}>Hello</div>;
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setModalShow(true);
  };
  return (
    <div className="search-user">
      <form onSubmit={onFormSubmit}>
        <div class="form-group has-search">
          <span class="fa fa-search form-control-navbar">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            onChange={onInputChane}
            name="nationalId"
            type="text"
            class="form-control"
            placeholder="Search"
          />
        </div>
        <PrescriptionView
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
        />
      </form>
    </div>
  );
}
