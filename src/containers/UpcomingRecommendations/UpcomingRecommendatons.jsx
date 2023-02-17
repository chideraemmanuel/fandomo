import React, { useState, useEffect } from "react";
import "./upcoming-recommendations.css";
import Card from "../../components/Card/Card";
import NotFound from "../../components/NotFound/NotFound";

const UpcomingRecommendatons = ({ id }) => {
  const [UpcomingRecommendedAnimes, setUpcomingRecommendedAnimes] =
    useState(null);
  const [err, setErr] = useState(null);

  const [random, setRandom] = useState(1);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setRandom(() => Math.random());
    console.log(random);
  };

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=10`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.data.slice(0, 10));
        setUpcomingRecommendedAnimes(data.data);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [random]);

  return (
    <div className="upcoming-recommendations">
      {err && (
        <NotFound
          title="Sorry, something went wrong."
          content="Could not get similar upcoming Anime recommendations."
        />
      )}

      {UpcomingRecommendedAnimes && UpcomingRecommendedAnimes.length !== 0 && (
        <h3 className="upcoming-recommendations__header">
          More upcoming Anime:
        </h3>
      )}

      <div className="upcoming-recommendations__cards">
        {UpcomingRecommendedAnimes &&
          UpcomingRecommendedAnimes.filter((UpcomingRecommendedAnime) => {
            return UpcomingRecommendedAnime.mal_id !== id;
          }).map((UpcomingRecommendedAnime) => {
            return (
              <Card
                key={UpcomingRecommendedAnime.mal_id}
                imageSrc={UpcomingRecommendedAnime.images.webp.large_image_url}
                imageInfo={`${UpcomingRecommendedAnime.title} Cover`}
                title={UpcomingRecommendedAnime.title}
                year={UpcomingRecommendedAnime.year}
                animeId={UpcomingRecommendedAnime.mal_id}
                onClick={() => scrollUp()}
              />
            );
          })}
      </div>
    </div>
  );
};

export default UpcomingRecommendatons;
