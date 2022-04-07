import React from "react";

const Cards = (props) => {
  return (
    <div>
      <i> {props.icon} </i>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Cards;
