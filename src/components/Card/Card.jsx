import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ imageInfo, imageSrc, title, year, animeId, onClick }) => {
  return (
    <Link to={`/info/${animeId}`} className="card" onClick={onClick}>
      <div className="card__image">
        <img src={imageSrc} alt={imageInfo} />
      </div>
      <div className="card__info">
        <span className="card__info--title">
          {title}
          {year && `(${year})`}
        </span>
      </div>
    </Link>
  );
};

export default Card;
