import React from 'react';
import { Link } from 'react-router-dom';
import logo from './headerAssets/logo.png';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header>
      <div className="header-content">
        <nav className="left-links">
          <Link to="/">Acasă</Link>
          <Link to="/counties">Județele</Link>
          <Link to="/topAttractions">Top atracții</Link>
        </nav>

        <div className="logo">
          <img src={logo} alt="România Noastră" />
        </div>

        <nav className="right-links">
          <Link to="/map">Hartă</Link>
          <Link to="/about">Despre</Link>
          {isAuthenticated ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;