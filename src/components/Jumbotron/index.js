import React from 'react';
import './style.css';

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid bg-danger">
      <div className="container">
        <h1 className="display-4 text-center">Clicky Game!</h1>
        <p className="lead">Click on any image to begin. Continue clicking images. For each unique image clicked, you earn five points. Click an image more than once, you lose the game. Let's get a clickin'!</p>
      </div>
    </div>
  );
}

export default Jumbotron;
