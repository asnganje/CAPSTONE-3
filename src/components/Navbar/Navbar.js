import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../styles/Navbar.style';

const Navbar = () => (
  <NavBarContainer>
    <Link className="navLink" to="/">
      <h1 className="nav-title">Global Cryptocurrency</h1>
    </Link>
    <div className="notify">
      <h2>🔔</h2>
      <p>⚙️</p>
    </div>
  </NavBarContainer>
);

export default Navbar;
