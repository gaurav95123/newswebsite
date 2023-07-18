import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  var [search, setsearch] = useState("");
  function getData(e) {
    setsearch(e.target.value);
  }
  function postData(e) {
    e.preventDefault();
    props.changeSearch(search);
    this.setState({ search: "" });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top ">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            NewsApp
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
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to="/"
                  onClick={() => props.changesearch("")}
                >
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/politics"
                  onClick={() => props.changesearch("")}
                >
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/crime"
                  onClick={() => props.changesearch("")}
                >
                  Crime
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/education"
                  onClick={() => props.changesearch("")}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  to="/other"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/science"
                      onClick={() => props.changesearch("")}
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/technology"
                      onClick={() => props.changesearch("")}
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/games"
                      onClick={() => props.changesearch("")}
                    >
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/cricket"
                      onClick={() => props.changesearch("")}
                    >
                      Cricket
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/fifa"
                      onClick={() => props.changesearch("")}
                    >
                      Fifa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/world"
                      onClick={() => props.changesearch("")}
                    >
                      World
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/india"
                      onClick={() => props.changesearch("")}
                    >
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/jokes"
                      onClick={() => props.changesearch("")}
                    >
                      Jokes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/covid"
                      onClick={() => props.changesearch("")}
                    >
                      Covid
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  to="/other"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => props.changeLanguage("hi")}
                    >
                      Hindi
                    </button>
                  </li>
                  <li>
                    <buttom
                      className="dropdown-item"
                      onClick={() => props.changeLanguage("en")}
                    >
                      English
                    </buttom>
                  </li>
                </ul>
              </li>
            </ul>

            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => postData(e)}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange={(e) => getData(e)}
                value={search}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
