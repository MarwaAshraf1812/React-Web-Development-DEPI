import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.css';
import { TvCard } from '../../components/TvCard';

export default function Tv() {
  const [tv, setTv] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies("tv");
  }, []);

  function getMovies(type) {
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=c9fac173689f5f01ba1b0420f66d7093`)
      .then((res) => {
        setTv(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred while fetching movies');
        setLoading(false);
      });
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="row my-5">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <div className="brdr w-25"></div>
          <h1>Trending<br /> Tvs <br/> to watch Right now</h1>
          <p className="text-info">Top trending Tvs by day</p>
          <div className="brdr"></div>
        </div>
      </div>
      {tv.map((tv) => (
        <div key={tv.id} className="col-md-2">
          <TvCard tv={tv} />
        </div>
      ))}
    </div>
  );
}