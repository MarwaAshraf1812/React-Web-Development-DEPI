import React from 'react';
import { imgPath } from '../../constants/imagePath';

export const TvCard = ({ tv }) => {
  return (
    <div className="tv-card">
        {tv.poster_path ? (
          <img 
            src={imgPath(tv.poster_path)} 
            alt={tv.name} 
            className='w-100' 
          />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
        <h6 className='p-2 text-center'>{tv.name}</h6>
    </div>
  );
};
