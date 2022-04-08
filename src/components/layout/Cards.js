import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h5 className="title">{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};

export default Cards;
