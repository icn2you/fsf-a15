import React from 'react';
import './style.css';

function Main(props) {
  return <main className="container text-center">{props.children}</main>;
}

export default Main;
