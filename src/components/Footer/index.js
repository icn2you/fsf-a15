import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer>
      <div className="container-fluid text-center">
        <div id="copyright">
          <i className="fab fa-react fa-lg"></i>&nbsp;&nbsp;&nbsp;Built with <i class="fas fa-heart"></i> by Christopher B. Zenner. No rights reserved.&nbsp;&nbsp;&nbsp;<i className="fab fa-react fa-lg"></i>
        </div>
        <div id="attribution">
          Jumbotron background pattern courtesy of <a href="https://dribbble.com/shots/6019214-Daily-UI-059/attachments" target="_blank" rel="noopener noreferrer">Yvonne Cavero</a>. Fonts served by <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a>. <br />Pokémon images, including the Pokéball favicon and Pokéball background pattern, are copyrighted by their respective creators.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
