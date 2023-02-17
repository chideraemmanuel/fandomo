import React from "react";
import "./anime-info-layout.css";
import { Outlet, Link } from "react-router-dom";
import Footer from "../containers/Footer/Footer";

const AnimeInfoLayout = () => {
  return (
    <div className="anime-info-layout">
      <div className="anime-info-layout__logo">
        <Link to="/">
          <h1>FanDomo</h1>
        </Link>
      </div>

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AnimeInfoLayout;
