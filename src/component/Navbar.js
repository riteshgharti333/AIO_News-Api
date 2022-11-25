import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-justify logo " to="/">
            AIO NEWS
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  business
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">
                  entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/general">
                  general
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/health">
                  health
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/science">
                  science
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  sports
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
