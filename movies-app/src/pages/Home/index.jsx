import './index.css';
import MovieCard from '../../components/MovieCard';
import { ContextMovies } from '../../components/Store/index';
import { useContext } from 'react';

export default function Home() {
  let { movies, setType } = useContext(ContextMovies);
  return (
    <div className="row my-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25"></div>
          <h1>Trending<br /> movies <br/> to watch Right now</h1>
          <p className="text-info">Top trending movies by day</p>
          <div className="brdr"></div>
        </div>
      </div>
      {movies.slice(10).map((movie) => (
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