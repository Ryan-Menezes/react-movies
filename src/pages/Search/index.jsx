import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import '../MoviesGrid.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    setMovies([]);

    const searchWithQueryUrl = `${searchURL}?api_key=${apiKey}&query=${query}`;

    getSearchedMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Results for: <span className="query-builder">{query}</span>
      </h2>

      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}

        {movies.length > 0 && movies.map(movie => (
          <MovieCard
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
