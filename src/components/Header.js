import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Header(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a> 
          </li> 
        </ul>
        <div className={`form-check form-switch text-${props.mode === "light"? "dark" : "light"}`}>
        <input className="form-check-input" type="checkbox" id="darkModeBtn"  onClick={props.toggleMode}/>
        <label className="form-check-label " htmlFor="darkModeBtn">Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Header.propTypes = {
    title: PropTypes.string, aboutText: PropTypes.string
} 

Header.defaultProps =  {
    title: "Set Title here",
    aboutText: "About text here"
}