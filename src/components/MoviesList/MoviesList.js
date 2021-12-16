import "./MoviesList.css";

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MOVIESLIST_URL = "https://mock-api.driven.com.br/api/v4/cineflex/movies";

export default function MoviesList() {
  const [allMoviesList, setMoviesList] = useState([]);
  console.log(allMoviesList);
  const getAllMovies = (
    () => {
      const promise = axios.get(MOVIESLIST_URL);
      promise.then( response => {
        setMoviesList([...response.data]);
        console.log(allMoviesList);
      });
    }
  );

  useEffect(getAllMovies, []);
  /*
  if (allMoviesList.length === 0) {
    return (
      <ul className="movies-list">
        <h1>Loading movies...</h1>
      </ul>
    );
  }
  */
  
  return (
    <ul className="movies-list">
      {allMoviesList.map((movie, index) => (
        <Link to={`/sessoes/${movie.id}`}>
          <li className="movie-card" key={index} id={movie.id}>
            <img className="poster" src={movie.posterURL} alt={movie.title} />
          </li>
        </Link>
      ))}
    </ul>
  );
}