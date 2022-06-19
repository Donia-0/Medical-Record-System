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
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
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

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className={style.ResultCards}>
        <div className="row">
          <SearchDrugResult
            MedecineName={result.name}
            MedecineIngredient={result.ingredient}
            MedecineDescription={result.description}
          />
        </div>
      </div>
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
                <SelectionField
                  labelName="Term"
                  type="text"
                  placeholder="Enter term to search"
                  onChange={(e) => setTerm(e.target.value)}
                  value={term}
                />
                {/* <div className="row">
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
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={style.ResultCards}>
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
      </div> */}
      {results ? (
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
        { renderedResults }
      )}
    </div>
  );
};

export default PillIdentifier;
