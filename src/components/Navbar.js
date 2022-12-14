import React from "react";
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
    const navLinks = props.navLinks

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="global">
            {
                navLinks.map((navLink, index) => (
                    <li key={index} className="nav-item">
                        <Link  className="nav-link" to={navLink.menuHref}>
                            {navLink.menuName}
                        </Link>
                    </li>
                ))
            }
          </ul>
          <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="darkmode"/>
            <label className="form-check-label" htmlFor="darkmode">Dark</label>
        </div>
          {props.searchBar === true && <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string
  };