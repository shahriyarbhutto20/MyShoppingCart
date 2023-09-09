import { Button } from "bootstrap";
import React from "react";

function CustomCard({
  img,
  description,
  title,
  price,
  rating,
  cardBtnText,
  onClick,
  customBtnClass,
}) {
  return (
    <div className="cardDiv card">
      <div className="imgDiv">
        <img src={img} alt="image here" />
      </div>
      <div className="titalDiv">
        <h5>{title}</h5>
      </div>
      <div className="descriptioDiv">
        <p>{description}</p>
      </div>
      <div>
        <h6>
          Price: $ {price}
          <span style={{ marginLeft: 10 }}> Rating: {rating}</span>
        </h6>
      </div>
      <div>
        <button type="button" onClick={onClick} className={customBtnClass}>
          {cardBtnText}
        </button>
      </div>
    </div>
  );
}

export default CustomCard;
