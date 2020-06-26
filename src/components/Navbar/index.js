import React from 'react';
import './style.css';

export function Navbar(props) {
  return (
    <nav className="navbar navbar-dark">
      <span className="navbar-brand mb-0 h1">Pokéclick Game</span>
      <span className="navbar-text">Score: 0 | Top Score: 0</span>
    </nav>
  );
}

export default Navbar;
