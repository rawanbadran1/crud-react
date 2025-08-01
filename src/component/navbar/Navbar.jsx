import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Crud</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to={"/users"}>users</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to={"/add"}>Create</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to={"/About"}>About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
