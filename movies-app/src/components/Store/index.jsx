import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export let ContextMovies = createContext(0);

export function ContextMoviesProvider(props) {
  const [movies, setMovies] = useState([]);
  const [people, setPeoples] = useState([]);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData("all", setMovies);
    getData("person", setPeoples);
  }, []);

  function getData(type, callback) {
    localStorage.setItem('Type', type);
    setType(type);
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=c9fac173689f5f01ba1b0420f66d7093`)
      .then((res) => {
        callback(res.data.results);
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


  return <ContextMovies.Provider value={{ movies, people, type, setType }}>
    {props.children}
  </ContextMovies.Provider>
};
