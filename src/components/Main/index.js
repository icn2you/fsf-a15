import React from 'react';
import './style.css';

function Main(props) {
  return <main className="container mb-4 text-center">{props.children}</main>;
}

export default Main;
