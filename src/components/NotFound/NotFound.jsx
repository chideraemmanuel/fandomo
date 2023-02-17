import React from "react";
import "./not-found.css";
import notFoundImage from "../../assets/404-girl.png";
import { AiOutlineReload } from "react-icons/ai";

const NotFound = ({ content, title }) => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="not-found">
      <div className="not-found__image">
        <img src={notFoundImage} alt="Not Found" />
      </div>
      <div className="not-found__info">
        <span>{title}</span>
        <p>{content}</p>
        <button onClick={() => reload()}>
          <span>Retry</span>
          <AiOutlineReload />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
