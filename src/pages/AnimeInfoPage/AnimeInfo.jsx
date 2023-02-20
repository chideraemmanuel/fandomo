import React, { useContext, useEffect, useState } from "react";
import "./anime-info.css";
import { useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import NotFound from "../../components/NotFound/NotFound";
import AnimeContext from "../../contexts/AnimeContext";
import Recommendations from "../../containers/Recommendations/Recommendations";
import UpcomingRecommendatons from "../../containers/UpcomingRecommendations/UpcomingRecommendatons";
import Loader from "../../components/Loader/Loader";

const AnimeInfo = () => {
  const { id } = useParams();
  const [animeInfo, setAnimeInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isTrailerShowing, setIsTrailerShowing] = useState(false);

  const { url } = useContext(AnimeContext);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnimeInfo(data.data);
        // console.log(data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  return (
    <div className="anime-info">
      {!animeInfo && <Loader />}

      {error && (
        <NotFound
          title="Sorry, something went wrong. :("
          content="Could not fetch anime info."
        />
      )}

      {isTrailerShowing && (
        <div
          className="anime-info__trailer"
          onClick={() => setIsTrailerShowing(false)}
        >
          <FaTimes onClick={() => setIsTrailerShowing(false)} />
          <div className="anime-info__trailer--video">
            <iframe
              //   width="560"
              //   height="315"
              src={`https://www.youtube.com/embed/${animeInfo.trailer.youtube_id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {animeInfo && (
        <div className="anime-info__content">
          <div className="anime-info__content--image">
            <img
              src={animeInfo.images.webp.large_image_url}
              alt={`${animeInfo.title} Cover`}
            />
          </div>

          <div className="anime-info__content--info">
            <div className="anime-info__content--info_title">
              <h2>{animeInfo.title}</h2>
              {/* <h2>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h2> */}
            </div>

            <div className="anime-info__content--info_genre">
              {animeInfo &&
                animeInfo.genres.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
            </div>

            <div className="anime-info__content--info_text">
              {animeInfo.titles && (
                <p>
                  <span>Title synonyms: </span>
                  {animeInfo.titles.map((title, index) => (
                    <span key={index}>{(index ? ", " : "") + title.title}</span>
                  ))}
                </p>
              )}

              {animeInfo.episodes && (
                <p>
                  <span>Episodes: </span>
                  {animeInfo.episodes}
                </p>
              )}

              <p>
                <span>Status: </span>
                {animeInfo.status}
              </p>

              {animeInfo.synopsis && (
                <p>
                  <span>Synopsis: </span>
                  {animeInfo.synopsis}
                </p>
              )}
            </div>

            <button
              className="anime-info__content--info_button"
              onClick={() => setIsTrailerShowing(true)}
            >
              Watch Trailer
            </button>
          </div>
        </div>
      )}

      {url !== "https://api.jikan.moe/v4/top/anime?filter=upcoming" && (
        <Recommendations id={id} />
      )}
      {url === "https://api.jikan.moe/v4/top/anime?filter=upcoming" && (
        <UpcomingRecommendatons id={id} />
      )}
    </div>
  );
};

export default AnimeInfo;
