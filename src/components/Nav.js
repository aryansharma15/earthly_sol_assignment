import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IconBase } from 'react-icons/lib/esm/iconBase';
import '../styles/nav.css';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          earthly
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">H</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Get in Touch!
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link cart" href="#">
                {/* <i class="fa-regular fa-cart-shopping"></i> */}
                <FaShoppingCart className="cart-icon"></FaShoppingCart>
              </a>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">Action</a>
                </li>

                <li>
                  <a className="dropdown-item">Another action</a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>

      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success">Search</button>
      </form>
    </nav>
  );
}

export default Nav