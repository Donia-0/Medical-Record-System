import React, { useEffect, useState } from "react";
import style from "../../Css/Pill/Pill.module.css";
import SelectionField from "./SelectionField";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import SearchDrugResult from "./SearchDrugResult";

const PillIdentifier = (props) => {
  const [search, setSearch] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const ListOfColors = [
    "BLACK GREEN",
    "BLACK WHITE",
    "BLUE",
    "BLUE BLUE",
    "BLUE BROWN",
    "BLUE GRAY",
    "BLUE GREEN",
    "BLUE ORANGE",
    "BLUE PINK",
    "BLUE PURPLE",
    "BLUE WHITE",
    "BLUE YELLOW",
    "BROWN",
    "BROWN PINK",
    "BROWN WHITE",
    "BROWN YELLOW",
    "GRAY",
    "GRAY ORANGE",
    "GRAY PURPLE",
    "GRAY YELLOW",
    "GREEN",
    "GREEN BLUE",
    "GREEN GREEN",
    "GREEN ORANGE",
    "GREEN PINK",
    "GREEN WHITE",
    "ORANGE",
    "ORANGE BLUE",
    "ORANGE BROWN",
    "ORANGE GRAY",
    "ORANGE WHITE",
    "PINK",
    "PINK BLACK",
    "PINK BLUE",
    "PINK GREEN",
    "PINK WHITE",
    "PURPLE",
    "PURPLE BLUE",
    "PURPLE ORANGE",
    "RED",
    "RED WHITE",
    "TURQUOISE",
    "WHITE",
    "WHITE BLUE",
    "WHITE BROWN",
    "WHITE GRAY",
    "WHITE GREEN",
    "WHITE ORANGE",
    "WHITE PINK",
    "WHITE RED",
    "WHITE WHITE",
    "WHITE YELLOW",
    "YELLOW",
    "YELLOW BLACK",
    "YELLOW BROWN",
    "YELLOW PURPLE",
    "YELLOW WHITE",
  ];

  const ListOfShapes = [
    "PENTAGON (5 SIDED)",
    "PENTAGON (5 SIDED)",
    "DIAMOND",
    "CAPSULE",
    "RECTANGLE",
    "OVAL",
    "TEAR",
    "ROUND",
    "FREEFORM",
    "BULLET",
    "TRAPEZOID",
    "HEXAGON (6 SIDED)",
    "DOUBLE CIRCLE",
    "SQUARE",
    "OCTAGON (8 SIDED)",
    "TRIANGLE",
  ];
  const renderedColors = ListOfColors.map((color) => {
    return (
      <option value={`${color.toLocaleLowerCase()}`}>
        {color.toLowerCase()}
      </option>
    );
  });
  const renderedShapes = ListOfShapes.map((shape) => {
    return (
      <option value={`${shape.toLocaleLowerCase()}`}>
        {shape.toLowerCase()}
      </option>
    );
  });
  return (
    <div className={style.add_pill_form_container}>
      <div className={style.add_pill}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.pill_img_container}>
              <div className={style.pill_container_header}>
                <span className={style.add_pill_header}>Search Drug</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.add_pill_form}>
              <form
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="form-group"
              >
                <div className={`row ${style.field}`}>
                  <SelectionField
                    labelName="Color"
                    options={renderedColors}
                    selectName="Choose Color"
                  />
                  <SelectionField
                    labelName="Shape"
                    options={renderedShapes}
                    selectName="Choose Shape"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className={style.add_btn}>
                      <button
                        className="btn btn-primary mb-2"
                        onClick={() => {
                          setSearch(true);
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ResultCards}>
        <div className="row">
          <SearchDrugResult
            MedecineName="abilify"
            MedecineIngredient="ARIPIPRAZOLE15mg"
            MedecineDescription="abilify (aripiprazole is an antipsychotic medication. it works by changing the actions of chemicals in the brain. abilify is used to treat the symptoms of psychotic conditions such as schizophrenia and bipolar i disorder (manic depression). it is not known if aripiprazole is safe or effective in children younger than 13 with schizophrenia, or children younger than 10 with bipolar disorder. abilify is also used together with other medicines to treat major depressive disorder in adults. abilify is also used in children 6 years or older who have tourette's disorder, or symptoms of autistic disorder (irritability, aggression, mood swings, temper tantrums, and self-injury)."
          />
          <SearchDrugResult
            MedecineName="abilify"
            MedecineIngredient="ARIPIPRAZOLE15mg"
            MedecineDescription="ccupril (quinapril) is an ace inhibitor. ace stands for angiotensin converting enzyme. accupril is used to treat high blood pressure (hypertension). lowering blood pressure may lower your risk of a stroke or heart attack. accupril is also used together with other medications to treat heart failure."
          />
          <SearchDrugResult
            MedecineName="abilify"
            MedecineIngredient="ARIPIPRAZOLE15mg"
            MedecineDescription="ccupril (quinapril) is an ace inhibitor. ace stands for angiotensin converting enzyme. accupril is used to treat high blood pressure (hypertension). lowering blood pressure may lower your risk of a stroke or heart attack. accupril is also used together with other medications to treat heart failure."
          />
          <SearchDrugResult
            MedecineName="abilify"
            MedecineIngredient="ARIPIPRAZOLE15mg"
            MedecineDescription="abilify (aripiprazole is an antipsychotic medication. it works by changing the actions of chemicals in the brain. abilify is used to treat the symptoms of psychotic conditions such as schizophrenia and bipolar i disorder (manic depression). it is not known if aripiprazole is safe or effective in children younger than 13 with schizophrenia, or children younger than 10 with bipolar disorder. abilify is also used together with other medicines to treat major depressive disorder in adults. abilify is also used in children 6 years or older who have tourette's disorder, or symptoms of autistic disorder (irritability, aggression, mood swings, temper tantrums, and self-injury)."
          />
        </div>
      </div>
      {/* <div className={style.pill_identifier_instructions}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.textheader}>
            <h1>How to use our Pill identifier to view drug images?</h1>
          </div>
          <div className={style.textparagraph}>
            <p>
              Using pill finder to find drug images is pretty simple and
              straightforward. You can easily identify pills and view pill
              images a number of ways.
            </p>
          </div>
          <div className={style.cards}>
            <div className="row">
              <div className="col-sm-6">
                <div className={style.cardStyle}>
                  <div
                    className={`${style.instructions_card} card text-center`}
                  >
                    <div className={style.instructions_card_body}>
                      <h5 className={style.instructions_card_title}>Color</h5>
                      <p className={style.instructions_card_text}>
                        Used to search for pill image by pill color.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className={style.cardStyle}>
                  <div
                    className={`${style.instructions_card} card text-center`}
                  >
                    <div className={style.instructions_card_body}>
                      <h5 className={style.instructions_card_title}>Shape</h5>
                      <p className={style.instructions_card_text}>
                        Used to search for pill image by the shape of the pill.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PillIdentifier;
