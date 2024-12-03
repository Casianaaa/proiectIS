import React from 'react';
import { Link } from 'react-router-dom';
import logo from './headerAssets/logo.png';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header>
      <div className="header-content">
        <nav className="left-links">
          <Link to="/home">Acasă</Link>
          <Link to="/counties">Județele</Link>
          <Link to="/topAttractions">Top atracții</Link>
        </nav>

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="România Noastră" />
          </Link>
        </div>

        <nav className="right-links">
          <Link to="/map">Hartă</Link>
          <Link to="/about">Despre</Link>
          {isAuthenticated ? (
            <>
              <Link to="/myAccount">My Account</Link>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
