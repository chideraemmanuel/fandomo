import React, { useContext } from "react";
import Cards from "../../containers/Cards/Cards";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import AnimeContext from "../../contexts/AnimeContext";
import "./homepage.css";

const Homepage = () => {
  const {
    setUrl,
    setResult,
    upcomigActive,
    setUpcomingActive,
    popularActive,
    setPopularActive,
    setPageNumber,
  } = useContext(AnimeContext);

  const viewPopular = () => {
    setUrl("https://api.jikan.moe/v4/top/anime?filter=favorite");
    setPopularActive(true);
    setUpcomingActive(false);
    setResult(null);
    setPageNumber(1);
  };

  const viewUpcoming = () => {
    setUrl("https://api.jikan.moe/v4/top/anime?filter=upcoming");
    setUpcomingActive(true);
    setPopularActive(false);
    setResult(null);
    setPageNumber(1);
  };

  return (
    <div className="homepage">
      <Header />
      <div className="categories">
        <button
          className={
            popularActive ? "categories__popular active" : "categories__popular"
          }
          onClick={() => viewPopular()}
        >
          Popular
        </button>
        <button
          className={
            upcomigActive
              ? "categories__upcoming active"
              : "categories__upcoming"
          }
          onClick={() => viewUpcoming()}
        >
          Upcoming
        </button>
      </div>

      <Cards />

      <Footer />
    </div>
  );
};

export default Homepage;
