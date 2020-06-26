import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Pokemon from './components/Pokemon';
import pokemon from './data/pokemon.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pokemon};
  }

  render() {
    const pokemonImgs = this.state.pokemon.map(pokemon => 
      <Pokemon
        id={pokemon.id}
        key={pokemon.id}
        name={pokemon.name}
        img={pokemon.image}
        clicked={false}
      />
    );

    return (
      <>
        <Header />
        <Main>{pokemonImgs}</Main>
        <Footer />
      </>
    );
  }
}

export default App;
