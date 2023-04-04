import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
      console.log(data);
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-4 p-4">
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3 className="text-2xl font-medium text-amber-600">
            {movie.id} - {movie.title}
          </h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
