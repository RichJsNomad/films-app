import React from "react";

function MovieCard({ movie }) {
  function handleFavouriteClick() {
    alert("Clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="movie.url" alt="movie.title" />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavouriteClick}>
            💙
          </button>
        </div>
      </div>
      <div className="movie-info">
        <p>{movie.release_date}</p>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
