import React from 'react';
import './style.css';

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid bg-danger">
      <div className="container text-center">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">
          Click on any Pokémon to begin. Continue clicking Pokémon. For each unique Pokémon clicked, you earn five points.<br />Click a Pokémon more than once, you lose the game. Manage to click on every Pokémon no more than once, you win. Let's get a clickin'!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
