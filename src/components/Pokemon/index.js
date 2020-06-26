import React from 'react';
import './style.css';

function Pokemon(props) {
  return <img className="img-thumbnail" src={props.img} alt={props.name} />;
}

export default Pokemon;
