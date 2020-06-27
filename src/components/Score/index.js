import React from 'react';
import './style.css';

function Score(props) {
  return (
    <span id="game-score" className="align-bottom">Score: {props.score} | Top Score: {props.topScore}</span>
  );
}

export default Score;
