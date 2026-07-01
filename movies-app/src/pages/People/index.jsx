import './index.css';
import { MediaCard } from '../../components/MediaCard';
import { ContextMovies } from '../../components/Store/index';
import { useContext } from 'react';

export default function People() {
  let { people, setType } = useContext(ContextMovies);
  
  return (
    <div className="row my-5">
      {people.map((person) => (
        <div key={person.id} className="col-md-2 mb-3">
          <MediaCard 
            person={person} 
            linkTo={`/person-details/${person.id}`}
            onClick={() => setType('person')}
          />
        </div>
      ))}
    </div>
  );
}
