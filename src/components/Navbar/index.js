import React from 'react';
import Score from '../Score';
import './style.css';

export function Navbar(props) {
  return (
    <nav className="container-fluid fixed-top">
      <div className="row pt-3 pb-3">
        <div className="col text-left">
          <span id="game-brand" className="align-bottom">
            Pokéclick Game
          </span>
        </div>
        <div className="col text-center">
          <span id="game-msg" className="align-bottom">
            {props.msg}
          </span>    
        </div>
        <div className="col text-right">
          <Score
            score={props.score}
            topScore={props.topScore}
          />
        </div>  
      </div>
    </nav>
  );
}

export default Navbar;
