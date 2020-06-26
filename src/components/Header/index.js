import React from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import './style.css';

function Header(props) {
  return (
    <header>
      <Navbar 
        score={props.score}
        topScore={props.topScore}
      />
      <Jumbotron />
    </header>
  );
}

export default Header;
