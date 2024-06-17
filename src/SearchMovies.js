import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './templates/html/MovieCard';
import axios from 'axios';
import '../src/templates/css/SearchMovies.css';
const API_KEY = "CQCZADV-A6EM78D-GB7RYVT-2YM7NKF";

const searchMovies = async (query) => {
  try {
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${query}`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
    return response.data.docs;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

function SearchMovies() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  return (
    <div className='wrapper'>
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </div>
  );
}

export default SearchMovies;