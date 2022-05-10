import React, { useState, useEffect } from "react";
import style from "../../../Css/records/Record.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faListUl } from "@fortawesome/free-solid-svg-icons";

const ViewAllergy = (props) => {
  const listOfAllergies = [
    "knfkbnjdnbio",
    "knfkbnjdnbio",
    "knfkbnjdnbio",
    "knfkbnjdnbio",
    "knfkbnjdnbio",
    "knfkbnjdnbio",
    "knfkbnjdnbio",
    "knfkbnjdnbio",
  ];

  const renderedAllergies = listOfAllergies.map((allergy) => {
    return (
      <div className="col-lg-6 col-md-6 col-sm-6">
        <FontAwesomeIcon className={style.allergy_icon} icon={faListUl} />
        {allergy}
      </div>
    );
  });
  return (
    <div className={style.add_record} style={{ marginTop: "20px" }}>
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
    </div>
  );
};

export default ViewAllergy;
