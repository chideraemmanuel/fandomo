import React, { useContext } from "react";
import "./header.css";
import headerBg from "../../assets/header-bg.jpg";
import { FaSearch } from "react-icons/fa";
import AnimeContext from "../../contexts/AnimeContext";

const Header = () => {
  const {
    setUrl,
    search,
    setSearch,
    setResult,
    setPopularActive,
    setUpcomingActive,
  } = useContext(AnimeContext);

  const searchAnime = (e) => {
    setSearch(e.target.value);
    setResult(null);
    if (e.target.value === "" && e.keyCode === 13) {
      return;
      // console.log("empty search");
    } else if (e.keyCode === 13) {
      e.target.blur();
      setUrl(`https://api.jikan.moe/v4/anime?q=${search}`);
      setResult(true);
      setPopularActive(false);
      setUpcomingActive(false);
      // console.log(result);
    }
  };

  return (
    <header
      style={{
        background: `url(${headerBg}) no-repeat center center/cover`,
      }}
    >
      {/* <div className="overlay"></div> */}
      <div className="header">
        <div className="header__logo">
          <a href="/">
            <h1>FanDomo</h1>
          </a>
        </div>

        <div className="header__text">
          <h2>
            Get info about your favourite <br />
            Anime!
          </h2>
          <label htmlFor="header-search" className="header__text--search">
            <FaSearch />
            <input
              type="text"
              id="header-search"
              name="header-search"
              placeholder="Search for an Anime..."
              onKeyUp={(e) => searchAnime(e)}
            />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
