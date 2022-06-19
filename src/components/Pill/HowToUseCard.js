import React from "react";
import style from "../../Css/Pill/Pill.module.css";

const HowToUseCard = ({ cardTitle, cardText }) => {
  return (
    <div className="col-sm-6">
      <div className={style.cardStyle}>
        <div className={`${style.instructions_card} card text-center`}>
          <div className={style.instructions_card_body}>
            <h5 className={style.instructions_card_title}>{cardTitle}</h5>
            <p className={style.instructions_card_text}>{cardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseCard;
