import React from "react";

function MovieCard({ movie }) {
  function handleFavouriteClick() {
    alert("Clicked");
  }
  return (
    <div>
      <div>
        <img src="movie.url" alt="movie.title" />
        <div>
          <button onClick={handleFavouriteClick}>💙</button>
        </div>
      </div>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  );
}

export default MovieCard;
