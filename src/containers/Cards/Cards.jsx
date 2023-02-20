import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import Pagination from "../../components/Pagination/Pagination";
import AnimeContext from "../../contexts/AnimeContext";
// import "./cards.css";
import "./cards2.css";

const Cards = () => {
  const { animeList, error, search, result, url } = useContext(AnimeContext);

  return (
    <div className="container">
      {!animeList && <Loader />}
      {/* <Loader /> */}

      {error && (
        <NotFound
          title="Sorry, something went wrong."
          content="Can't connect to server."
        />
      )}

      {animeList && result && (
        <div className="result">
          Results for <span>{search}</span>: {animeList.length}
        </div>
      )}

      {animeList && animeList.length === 0 && (
        <NotFound title=":(" content="No anime matches the entered keyword" />
      )}

      <div className="cards">
        {animeList &&
          animeList.map((anime) => {
            return (
              // <Link to={`/info/${anime.mal_id}`}>
              <Card
                key={anime.mal_id}
                imageSrc={anime.images.webp.large_image_url}
                imageInfo={`${anime.title} Cover`}
                title={anime.title}
                year={anime.year}
                animeId={anime.mal_id}
              />
              // </Link>
            );
          })}
      </div>

      {animeList && url !== `https://api.jikan.moe/v4/anime?q=${search}` && (
        <Pagination />
      )}
    </div>
  );
};

export default Cards;
