import React from 'react';
import Score from '../Score';
import './style.css';

export function Navbar(props) {
  return (
    <nav className="navbar navbar-dark">
      <span className="navbar-brand mb-0 h1">Pokéclick Game</span>
      <Score
        score={props.score}
        topScore={props.topScore}
      />
    </nav>
  );
}

export default Navbar;
