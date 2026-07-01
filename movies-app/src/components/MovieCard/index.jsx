import React from 'react';
import { Link } from 'react-router-dom';
import { imgPath } from '../../constants/imagePath';

const MovieCard = ({ movie, linkTo, onClick }) => {
  return (
    <div className="movie-card w-100">
      <Link to={linkTo} onClick={ onClick }>
        <img 
          src={imgPath(movie.poster_path)} 
          alt={movie.title || movie.name} 
          className='w-100' 
        />
        <h6 className='my-2 text-center'>{movie.title || movie.name}</h6>
      </Link>
    </div>
  );
};

export default MovieCard;