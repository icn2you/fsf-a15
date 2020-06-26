import React from 'react';
import './style.css';

function Pokemon(props) {
  return <img id={props.id} className="img-thumbnail" src={props.img} alt={props.name} clicked={props.clicked.toString()} onClick={() => props.markClicked(props.id, props.clicked)} />;
}

export default Pokemon;
