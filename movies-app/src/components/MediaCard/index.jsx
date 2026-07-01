import React from 'react';
import { imgPath } from '../../constants/imagePath';
import { Link } from 'react-router-dom';


export const MediaCard = ({ person, linkTo,  onClick }) => {
  return (
    <div className="person-card">
      <Link to={linkTo}  onClick={ onClick }>
        {person.profile_path ? (
          <img
            src={imgPath(person.profile_path)}
            alt={person.name}
            className='w-100'
          />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
        <h6 className='p-2 text-center'>{person.name}</h6>
      </Link>
    </div>
  )
};