import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { setUISelectionRaw } from "@testing-library/user-event/dist/cjs/document/UI.js";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => {
        setMovies(data);
        console.log(data);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id} />)}
      </main>
    </>
  );
};

export default Home;
