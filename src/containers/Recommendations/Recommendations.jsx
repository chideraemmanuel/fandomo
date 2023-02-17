import React, { useEffect, useState } from "react";
import "./recommendations.css";
import Card from "../../components/Card/Card";
import NotFound from "../../components/NotFound/NotFound";

const Recommendations = ({ id }) => {
  const [recommendedAnimes, setRecommendedAnimes] = useState(null);
  const [err, setErr] = useState(null);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.data.slice(0, 10));
        setRecommendedAnimes(data.data.slice(0, 10));
      })
      .catch((err) => {
        setErr(err);
      });
  }, [id]);

  return (
    <div className="recommendations">
      {err && (
        <NotFound
          title="Sorry, something went wrong."
          content="Could not get similar Anime recommendations."
        />
      )}

      {recommendedAnimes && recommendedAnimes.length !== 0 && (
        <h3 className="recommendations__header">You might also like:</h3>
      )}
      <div className="recommendations__cards">
        {recommendedAnimes &&
          recommendedAnimes.map((recommendedAnime) => {
            return (
              <Card
                key={recommendedAnime.entry.mal_id}
                imageSrc={recommendedAnime.entry.images.webp.large_image_url}
                imageInfo={`${recommendedAnime.entry.title} Cover`}
                title={recommendedAnime.entry.title}
                year={recommendedAnime.entry.year}
                animeId={recommendedAnime.entry.mal_id}
                onClick={() => scrollUp()}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Recommendations;
