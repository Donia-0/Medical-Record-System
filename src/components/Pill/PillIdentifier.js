import React, { useEffect, useState } from "react";
import style from "../../Css/Pill/Pill.module.css";
import SelectionField from "./SelectionField";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import SearchDrugResult from "./SearchDrugResult";
import axios from "axios";
import HowToUseCard from "./HowToUseCard";

const PillIdentifier = (props) => {
  const [search, setSearch] = useState(false);
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/example/drug/${term}`
      );
      setResults(data);
    };
    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);
  const renderedResults = (
    <div className={style.ResultCards}>
      <div className="row">
        {results.map((result) => {
          return (
            <SearchDrugResult
              MedecineName={result.medicine_name}
              MedecineIngredient={result.medicine_ingredients}
              MedecineDescription={result.medicine_description}
              MedecineColor={result.medicine_color.toLowerCase()}
              MedecineShape={result.medicine_shape.toLowerCase()}
            />
          );
        })}
      </div>
    </div>
  );

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
                <SelectionField
                  labelName="Term"
                  type="text"
                  placeholder="Enter term to search"
                  onChange={(e) => setTerm(e.target.value)}
                  value={term}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {results.length === 0 ? (
        <div className={style.pill_identifier_instructions}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.textheader}>
              <h1>
                How to use our Pill identifier to know inforamtion about a drug?
              </h1>
            </div>
            <div className={style.textparagraph}>
              <p>
                Using pill finder to find drug is pretty simple and
                straightforward. You can easily identify pills and view pill a
                number of ways.
              </p>
            </div>
            <div className={style.cards}>
              <div className="row">
                <HowToUseCard
                  cardTitle="Color"
                  cardText="Used to search for pill by the color of the pill."
                />
                <HowToUseCard
                  cardTitle="Shape"
                  cardText="Used to search for pill by the shape of the pill."
                />
                <HowToUseCard
                  cardTitle="Ingredient"
                  cardText="Used to search for pill by the ingredient of the
                  pill."
                />
                <HowToUseCard
                  cardTitle="Description"
                  cardText="Used to search for pill by the description of the
                  pill."
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <> {renderedResults}</>
      )}
    </div>
  );
};

export default PillIdentifier;
