import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import style from "../../Css/Pill/Pill.module.css";

const SearchDrugResult = ({
  MedecineName,
  MedecineIngredient,
  MedecineDescription,
}) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-4">
      <div className={`card  ${style.drug_result_card}`}>
        <h5
          className="card-header"
          style={{
            backgroundColor: "#307b8c",
            color: "white",
            borderRadius: "10px 10px 0 0",
          }}
        >
          Name : {MedecineName}
        </h5>
        <div className="card-body">
          <h5 className="card-title">Ingredient : {MedecineIngredient}</h5>
          <p className="card-text"> {MedecineDescription}</p>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default SearchDrugResult;
