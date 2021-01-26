import React from "react";

const Movie = ({ movie }) => {
  //   console.log(movie);

  const handleToggleHeart = (e) => {
    if (
      e.target.parentNode.parentNode.getAttribute("data-toggled") === "true"
    ) {
      e.target.parentNode.parentNode.setAttribute("data-toggled", "false");
    } else {
      e.target.parentNode.parentNode.setAttribute("data-toggled", "true");
    }
    // console.log(e.target.parentNode);
  };
  return (
    <>
      <div className="movie">
        <img
          src={
            movie.poster_path !== ""
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "/image-not-available.png"
          }
          alt="Movie poster"
        />
        <div className="overlay">
          <div className="title">{movie.title}</div>
          <div className="rating">{`${movie.vote_average}/10`}</div>
          <div className="plot">{movie.overview}</div>
          <div
            data-toggled="false"
            className="listToggle"
            onClick={(e) => handleToggleHeart(e)}
          >
            <div>
              <i className="far fa-heart"></i>
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
