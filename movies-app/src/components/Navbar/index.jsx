import React from 'react';
import NavLink from './NavLinkComp/NavLink';
import { Link } from 'react-router-dom';
import './index.css';

const navLinks = [
  {name: "Home", path: "home"},
  {name: "Movies", path: "movies"},
  {name: "People", path: "people"},
  {name: "Tv", path: "tv"}
];

export default function Navbar({userData, logOut}) {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="">Noxe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData && 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-comp">
              {navLinks.map((link) => (
                <NavLink link={link} key={link.name} />
              ))}
            </ul>
          }
          
          <ul className="navbar-nav mb-2 ms-auto mb-lg-0 text-white align-items-center">
            {userData &&
              <li className='nav-item fs-5'>
                <i className="me-3 fa-brands fa-facebook"></i>
                <i className="me-3 fa-brands fa-instagram"></i>
                <i className="me-3 fa-brands fa-twitter"></i>
              </li>
            }
            {!userData &&
              <li className='nav-item'>
                <Link className="nav-link" to="login">Login</Link>
              </li>
            }
            {!userData &&
              <li className='nav-item'>
                <Link className="nav-link" to="register">Register</Link>
              </li>
            }
            {userData && 
              <li className='nav-item'>
                <button 
                  className="btn btn-link nav-link" 
                  onClick={logOut}
                  style={{ cursor: 'pointer' }}
                >
                  Logout
                </button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}