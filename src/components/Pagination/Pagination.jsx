import React, { useContext } from "react";
import "./pagination.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import AnimeContext from "../../contexts/AnimeContext";

const Pagination = () => {
  const { setUrl, popularActive, pageNumber, setPageNumber } =
    useContext(AnimeContext);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    scrollUp();
    setPageNumber(pageNumber + 1);

    if (popularActive) {
      setUrl(
        `https://api.jikan.moe/v4/top/anime?filter=favorite&page=${pageNumber}`
      );
    } else {
      setUrl(
        `https://api.jikan.moe/v4/top/anime?filter=upcoming&page=${pageNumber}`
      );
    }
  };

  const prevPage = () => {
    scrollUp();
    setPageNumber(pageNumber - 1);

    if (popularActive) {
      setUrl(
        `https://api.jikan.moe/v4/top/anime?filter=favorite&page=${pageNumber}`
      );
    } else {
      setUrl(
        `https://api.jikan.moe/v4/top/anime?filter=upcoming&page=${pageNumber}`
      );
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination__prev"
        disabled={pageNumber === 1 ? true : false}
        onClick={() => prevPage()}
      >
        <BsChevronLeft />
        <span>Previous Page</span>
      </button>

      <button className="pagination__next" onClick={() => nextPage()}>
        <span>Next Page</span>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
