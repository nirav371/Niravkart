import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css'; 

const Navbar = ({ cart }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="company-name">Niravkart</span>
        </div>
        <div className="navbar-right">
          <NavLink className="nav-link" to="/" state={{ cartitem: cart }}>
            <button className="nav-button">
              <span className="nav-button-text">Home</span>
              <span className="nav-button-icon">🏠</span>
            </button>
          </NavLink>
          <NavLink className="nav-link" to="/cart" state={{ cartitem: cart }}>
            <button className="nav-button">
              <span className="nav-button-text">Cart</span>
              <span className="nav-button-icon">🛒</span>
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
