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

    const pokeObjArr = pokemon.map(pokemon => 
      Object.assign(pokemon, { clicked: false }));

    // DEBUG:
    console.log(`pokeObjArr = ${JSON.stringify(pokeObjArr)}`);

    this.state = {pokeObjArr};
  }

  /* 
     Thanks to Ilya Kantor at [The Modern JavaScript Tutorial][ref] for this most elegant shuffle method!

     [ref](https://javascript.info/task/shuffle)
  */
  shuffle = (arr) => {
    // Create a copy of the array parameter for immutability!
    let shuffledArr = arr;

    for (let i = shuffledArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [shuffledArr[i], shuffledArr[j]] = 
        [shuffledArr[j], shuffledArr[i]];

      console.log(
        `Shuffled array: ${JSON.stringify(arr)}`
      );

      return shuffledArr;
    }
  }

  markClicked(id, clicked) {
    // DEBUG:
    console.log(`Pokemon ${id} clicked? ${clicked}`);
    
    if (clicked) {
      // ASSERT: User has already clicked this Pokémon;
      //         therefore, they lose the game.
      console.log(
        `Pokemon ${id} has already been clicked. You're a loser!`);
    } else {
      // ASSERT: User has not already clicked this Pokémon;
      //         therefore, their score increases by five points.
      
      const pokeObjArr = this.shuffle(
        this.state.pokeObjArr.map(pokemon =>
        (pokemon.id === id) ?
        Object.assign(pokemon, { clicked: true }) :
        pokemon
      ));

      console.log(
        `Test array: ${JSON.stringify(pokeObjArr)}`
      );
      
      this.setState({pokeObjArr});

      // DEBUG:
      // this.setState({testArr});

      // DEBUG:
      console.log(
        `New state: ${JSON.stringify(this.state.pokeObjArr)}`);



/*       this.setState({
        id = 
      })

      this.state.pokemon.clicked = true;

      const pokemon = this.shuffle(this.state.pokemon);

      this.setState({pokemon}); */
    }
  }

  render() {
    const pokemonImgs = this.state.pokeObjArr.map(pokemon => 
      <Pokemon
        id={pokemon.id}
        key={pokemon.id}
        name={pokemon.name}
        img={pokemon.image}
        clicked={pokemon.clicked}
        markClicked={this.markClicked.bind(this)}
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
