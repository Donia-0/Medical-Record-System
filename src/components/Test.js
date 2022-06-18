import React, { useEffect } from "react";
import axios from "axios";
import data from "../Data.json";
export default function Test() {
  const [index, setIndex] = React.useState();
  const [choice, setChoice] = React.useState();

  useEffect(() => {
    console.log(data);
  }, []);
  const onInputChange = (e) => {
    setIndex(e.target.value);
  };
  const onChoiceChange = (e) => {
    setChoice(e.target.value);
  };
  console.log(data[index]);
  return (
    <div className="container">
      <div className="col-lg-6 col-sm-6">
        <select
          onChange={onInputChange}
          value={index}
          className={`form-select`}
          name="term"
        >
          <option>Choose</option>
          {data.map((ele, index) => (
            <option key={index} value={index} choices={ele.choices}>
              {ele.text}
            </option>
          ))}
        </select>
        {index ? (
          data[index].choices ? (
            <div>
              <select
                onChange={onChoiceChange}
                value={choice}
                className={`form-select`}
                name="term"
              >
                <option>Choose</option>
                {data[index].choices.map((ele, index) => (
                  <option key={index} value={index} choices={ele.choices}>
                    {ele.text}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            "Not has choices"
          )
        ) : null}
      </div>
    </div>
  );
}
