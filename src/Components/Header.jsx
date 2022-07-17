import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="p-3 bg-dark text-white ">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li className="list-item">
                  <Link to="/" className="nav-link px-2 text-white">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="nav-link px-2 text-white">
                    About
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/contact" className="nav-link px-2 text-white">
                    Contact
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/gallery" className="nav-link px-2 text-white">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/menu" className="dropdown-item">
                      Menu
                    </Link>
                    <Link to="/Privateroom" className="dropdown-item">
                      privacy
                    </Link>
                    <Link to="/Benifits" className="dropdown-item">
                      Benifits
                    </Link>
                  </div>
                </li>

                <li className="list-item">
                  <Link to="/liveapi" className="nav-link px-2 text-white">
                    API
                  </Link>
                </li>
              </ul>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </button>

                <button type="button" className="btn btn-warning">
                  <Link to="/sigin" style={{ textDecoration: "none" }}>
                    Sign-up
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
