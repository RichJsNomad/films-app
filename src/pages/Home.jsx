import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {
  const [searchQuery, setSearchQuery] = useState();
  const movies = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's stone",
      release: "2001",
    },
    {
      id: 2,
      title: "Harry Potter and the Prisoner of Azkaban",
      release: "2003",
    },
    {
      id: 3,
      title: "Harry Potter and the Goblet of fire",
      release: "2004",
    },
    {
      id: 4,
      title: "Harry Potter and the Order of of the Phoenix",
      release: "2005",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form" action="">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
