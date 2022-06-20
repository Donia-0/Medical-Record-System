import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import { Accordion } from "react-bootstrap";
import style from "../../Css/Pill/Pill.module.css";

const SearchDrugResult = ({
  MedecineName,
  MedecineIngredient,
  MedecineDescription,
  MedecineColor,
  MedecineShape,
  eventKey,
}) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className={`card  ${style.drug_result_card}`}>
        <h5 className={`${style.result_card_header} card-header`} style={{}}>
          Name : {MedecineName}
        </h5>
        <div className="card-body">
          <h5 className={`${style.result_card_title} card-title`}>
            <strong style={{ color: "#307b8c" }}> Color: </strong>
            {MedecineColor}
          </h5>
          <h5 className={`${style.result_card_title} card-title`}>
            <strong style={{ color: "#307b8c" }}> Shape: </strong>
            {MedecineShape}
          </h5>
          <Accordion>
            <Accordion.Item eventKey="0" className={style.accord_item}>
              <Accordion.Header>View More Details</Accordion.Header>
              <Accordion.Body>
                <p className={`${style.result_card_text} "card-text"`}>
                  <strong style={{ color: "#307b8c" }}> Ingredient: </strong>
                  {MedecineIngredient}
                </p>
                <p className={`${style.result_card_text} "card-text"`}>
                  <strong style={{ color: "#307b8c" }}> Description: </strong>:
                  {MedecineDescription}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SearchDrugResult;
