import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../Data.json";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AcceptTerm from "./CheckSymptoms/AcceptTerm";
import style from "../Css/Symptoms.module.css";
import { Input, TextField } from "@mui/material";
import { Accordion } from "react-bootstrap";
const Symptoms = () => {
  const [index, setIndex] = useState("");
  const [choice, setChoice] = useState("");
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [isAccept, setIsAccept] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [analyze, setAnalyze] = useState([]);

  useEffect(() => {
    setModalShow(true);
    const options = {
      method: "GET",
      url: "https://endlessmedicalapi1.p.rapidapi.com/InitSession",
      headers: {
        "X-RapidAPI-Key": "3dcb6b0fccmshb6c7d2cc50dc96bp1c828ejsne2c170656d7c",
        "X-RapidAPI-Host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        localStorage.setItem("SessionID", response.data.SessionID);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const onInputChange = (e) => {
    setIndex(e.target.value);
  };
  const onInChange = (e) => {
    setValue(e.target.value);
  };
  const onChoiceChange = (e) => {
    setChoice(e.target.value);
  };
  const onAddClick = () => {
    const axios = require("axios");

    const options = {
      method: "POST",
      url: "https://endlessmedicalapi1.p.rapidapi.com/UpdateFeature",
      params: {
        name: data[index].name,
        value: value ? value : choice.value,
        SessionID: localStorage.SessionID,
      },
      headers: {
        "X-RapidAPI-Key": "3dcb6b0fccmshb6c7d2cc50dc96bp1c828ejsne2c170656d7c",
        "X-RapidAPI-Host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    var test = [...arr];
    test.push({
      name: data[index].text,
      value: choice.text ? choice.text : value,
    });

    setArr(test);
    setChoice("");
    setIndex("");
    setValue("");
  };
  const onAnalyzeClick = (e) => {
    const options = {
      method: "GET",
      url: "https://endlessmedicalapi1.p.rapidapi.com/Analyze",
      params: { SessionID: localStorage.SessionID },
      headers: {
        "X-RapidAPI-Key": "3dcb6b0fccmshb6c7d2cc50dc96bp1c828ejsne2c170656d7c",
        "X-RapidAPI-Host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setAnalyze(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const Choose = (
    <div className={style.select}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Box sx={{ minWidth: 520 }}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 520, maxWidth: 520 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Select Symptoms
            </InputLabel>
            <Select
              search={true}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={index}
              label="Sakdgjashdk"
              onChange={onInputChange}
            >
              <MenuItem>
                <em>None</em>
              </MenuItem>

              {data.map((ele, index) => (
                <MenuItem
                  style={{ overflowWrap: "anywhere" }}
                  key={index}
                  value={index}
                >
                  {ele.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {index ? (
          data[index].choices ? (
            <Box sx={{ minWidth: 320 }}>
              <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 320, maxWidth: 520 }}
              >
                <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                  value={choice}
                  onChange={onChoiceChange}
                >
                  <MenuItem>
                    <em>None</em>
                  </MenuItem>
                  {data[index].choices.map((ele, index) => (
                    <MenuItem key={index + 1} value={ele}>
                      {ele.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ) : (
            <Box sx={{ maxWidth: 300 }}>
              <input
                className={`${style.input} form-control`}
                onChange={onInChange}
                value={value}
                placeholder="Write Here"
                type="number"
              />
            </Box>
          )
        ) : null}
        <div className={style.symptomsbtns}>
          <button onClick={onAddClick} className="btn">
            Add Symptoms
          </button>
          <button onClick={onAnalyzeClick} className="btn">
            Analyze
          </button>
        </div>
      </form>
    </div>
  );

  const onAcceptClick = (e) => {
    const options = {
      method: "POST",
      url: "https://endlessmedicalapi1.p.rapidapi.com/AcceptTermsOfUse",
      params: {
        SessionID: localStorage.SessionID,
        passphrase:
          "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com",
      },
      headers: {
        "X-RapidAPI-Key": "3dcb6b0fccmshb6c7d2cc50dc96bp1c828ejsne2c170656d7c",
        "X-RapidAPI-Host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setIsAccept(true);
      })
      .catch(function (error) {
        console.error(error);
      });
    setModalShow(false);
  };
  console.log(analyze);
  return (
    <div className={style.symptoms}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {isAccept ? (
            <div>{Choose}</div>
          ) : (
            <AcceptTerm
              onClick={onAcceptClick}
              show={modalShow}
              onHide={(e) => setModalShow(false)}
            />
          )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={style.list}>
            <p>Your selected symptoms</p>
            <ul class="list-group">
              {arr.map((ele) => (
                <li style={{ display: "block" }} class="list-group-item">
                  {ele.name} : your answer is <strong>{ele.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="test">
        {!analyze
          ? analyze.Diseases.map((ele, index) => {
              <Accordion>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{ele[0]}</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>;
            })
          : null}
      </div> */}
    </div>
  );
};

export default Symptoms;
