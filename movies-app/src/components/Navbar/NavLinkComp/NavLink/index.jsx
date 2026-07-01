import React from 'react'
import { Link } from 'react-router-dom';

export default function NavLink({link}) {
  return (
    <li className="nav-item">
      <Link className="nav-link active" to={link.path}>{link.name}</Link>
    </li>
  )
}