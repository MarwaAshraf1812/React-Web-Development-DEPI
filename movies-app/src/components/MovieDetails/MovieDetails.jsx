import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextMovies } from '../Store';
import { imgPath } from '../../constants/imagePath';
import Cinemaimg from '../../assets/cinema.png';
import { motion } from "framer-motion";
import './style.css';

export default function MovieDetails() {
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
          src={imgPath(details.poster_path)}
          alt={details.title}
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
            <h2 className="card-title mb-4 fw-bold">{details.title}</h2>
            <p className="card-text">{details.overview}</p>
            <ul className="list-unstyled">
              <li><strong>Release Date:</strong> {details.release_date}</li>
              <li><strong>Rating:</strong> {details.vote_average}/10</li>
              <li><strong>Runtime:</strong> {details.runtime} minutes</li>
              <li><strong>Genres:</strong> {details.genres?.map((genre) => genre.name).join(', ')}</li>
              <li><strong>Status:</strong> {details.status}</li>
            </ul>
            <div className="left-img position-absolute bottom-0 w-5 h-50 end-0">
              <img src={Cinemaimg} alt="cinema" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
