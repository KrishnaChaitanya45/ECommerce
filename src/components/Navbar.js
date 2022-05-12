import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-4 shadow-sm">
        <div class="container ">
          <a class="navbar-brand fw-bold fs-4" href="/">
            e Bazaar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Link
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                 Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  About
                </Link>
              </li>
            </ul>
                <div className="buttons">
                    <a href="" className="btn btn-outline-dark ms-2 mx-2">
                        <i className="fa fa-sign-in me-2"></i> Log In            
                               </a>
                    <a href="" className="btn btn-outline-dark ms-2 mx-2">
                        <i className="fa fa-user-plus me-2"></i> Register           
                               </a>
                    <a href="" className="btn btn-outline-dark ms-2 my-2">
                        <i className="fa fa-shopping-cart me-2"></i> Your Cart - [ 0 ]          
                               </a>
                </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
