import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../Data.json";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const Symptoms = () => {
  const [index, setIndex] = useState("");
  const [choice, setChoice] = useState("");
  const [arr, setArr] = useState([]);
  const [isAccept, setIsAccept] = useState(false);
  useEffect(() => {
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
        value: choice.value,
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
  };
  const onAnalyClick = (e) => {
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
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const Choose = (
    <div>
      {" "}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ margin: "50px 50px" }}
      >
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
              value={index}
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
                    <MenuItem key={index} value={ele}>
                      {ele.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ) : (
            "Not has choices"
          )
        ) : null}
        <button onClick={onAddClick} className="btn btn-secondary">
          Add Symptoms
        </button>
      </form>
      <button onClick={onAnalyClick} className="btn btn-secondary">
        Analyze
      </button>
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
  };

  if (data[index] && choice) {
    console.log(data[index].name, " ****** ", choice.value);
  }
  return (
    <div>
      {isAccept ? (
        Choose
      ) : (
        <div onClick={onAcceptClick} className="btn btn-primary">
          Accept terms
        </div>
      )}
    </div>
  );
};

export default Symptoms;
