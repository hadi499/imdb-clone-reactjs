import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Results from "./Results";
function Home() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  useEffect(() => {
    const getMovies = async () => {
      // const res = await fetch(
      //   `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      // );

      const res = await fetch(
        `https://api.themoviedb.org/3/${
          genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
        }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );

      const data = await res.json();
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <div>
      <Results movies={movies} />
    </div>
  );
}

export default Home;
