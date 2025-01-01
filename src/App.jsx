import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const moviesNumber = 1;

  if (moviesNumber) {
  }
  return (
    <>
      <MovieCard
        movie={{
          title: "Harry Potter and the Order of the Phoenix",
          release_date: "2005",
        }}
      />

      <MovieCard
        movie={{
          title: "Harry Potter and the Chamber of secrets",
          release_date: "2002",
        }}
      />
    </>
  );
}

export default App;
