import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextMovies } from '../Store';
import { imgPath } from '../../constants/imagePath';
import { motion } from "framer-motion";
import './style.css';

export default function PersonDetails() {
  const [details, setDetails] = useState({});
  let { type } = useContext(ContextMovies);
  let { id } = useParams();

  /**
   * Fetches the movie or person details from the API based on the id in the
   * URL parameters and the type of details to fetch (movie or person).
   * @function
   */
  function getDetails() {
    axios
      .get(`https://api.themoviedb.org/3/${type}/${id}?api_key=c9fac173689f5f01ba1b0420f66d7093`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    if (type && id) {
      getDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);
  return (
    <div className="container">
    <div className="row h-100 align-items-center">
      <div className="col-md-4 text-center">
        <img
          src={imgPath(details.profile_path)}
          alt={details.name}
          className="img-fluid rounded shadow"
          style={{ maxHeight: '500px' }}
        />
      </div>
      <div className="col-md-8">
        <div className="card shadow">
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="card-background"
          ></motion.div>
          <div className="card-body position-relative">
            <h2 className="card-title mb-4 fw-bold">{details.name}</h2>
            <ul className="list-unstyled">
              <li><strong>Known For:</strong> {details.known_for_department}</li>
              <li><strong>Birthday:</strong> {details.birthday}</li>
              <li><strong>Place of Birth:</strong> {details.place_of_birth}</li>
              <li><strong>Popularity:</strong> {details.popularity}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
