import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "no-image.png"} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
