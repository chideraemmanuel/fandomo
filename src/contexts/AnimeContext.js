import { createContext, useEffect, useState } from "react";

const AnimeContext = createContext();
export const AnimeContextProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [url, setUrl] = useState(
    "https://api.jikan.moe/v4/top/anime?filter=favorite"
  );
  const [popularActive, setPopularActive] = useState(true);
  const [upcomigActive, setUpcomingActive] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setAnimeList(null);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnimeList(data.data);
        // console.log(data.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  }, [url]);

  return (
    <AnimeContext.Provider
      value={{
        animeList,
        setAnimeList,
        url,
        setUrl,
        error,
        setError,
        search,
        setSearch,
        result,
        setResult,
        popularActive,
        setPopularActive,
        upcomigActive,
        setUpcomingActive,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContext;
