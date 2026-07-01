import React, { useContext } from 'react';
import './index.css';
import MovieCard from '../../components/MovieCard';
import { ContextMovies } from '../../components/Store';

export default function Movies() {
  let { movies, setType } = useContext(ContextMovies);
  return (
    <div className="row my-5">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-2">
          <MovieCard 
              movie={movie} 
              linkTo={`/movie-details/${movie.id}`}
              onClick={() => setType('movie')}
            />
        </div>
        
      ))}
    </div>
  );
}