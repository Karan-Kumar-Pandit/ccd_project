import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-dark text-white pt-5 pb-4 py-3 mt-4">
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                  About Us
                </h5>
                <hr className="mb-4" />
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                  Let Us Help
                </h5>
                <hr className="mb-4" />
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your Acount
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your Acount
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your Acount
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your Acount
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                  Services
                </h5>
                <hr className="mb-4" />
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Sell Product us
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your order
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your Acount
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your Acount
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                  Contact
                </h5>
                <hr className="mb-4" />
                <p>
                  <li className="fas fa-home mr-3"></li> New Ashok Nagar D Block
                </p>
                <p>
                  <li className="fas fa-envelope mr-3"></li>
                  karanbgs2000@gmail.com
                </p>
                <p>
                  <li className="fas fa-phone mr-3"></li> +7488619004
                </p>
                <p>
                  <li className="fas fa-print mr-3"></li> +8864076557
                </p>
              </div>

              <hr className="mb-4" />
              <div className="row d-flex justify-content-center">
                <div>
                  <p>
                    Copyright 2022 All Right Reserved By :
                    <a href="" style={{ textDecoration: "none" }}>
                      <strong className="text-info"> Karan Kumar</strong>
                    </a>
                  </p>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="list-inline-item">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a href="" className="text-white">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="" className="text-white">
                        <i className="fab fa-twiter"></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="" className="text-white">
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="" className="text-white">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
