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

    this.state = this.resetGameState('Click a Pokémon to begin!');
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
    }

    // DEBUG:
    // console.log(
    //   `Shuffled array: ${JSON.stringify(arr)}`
    // );

    return shuffledArr;
  }

  handleClick = (id, name, clicked) => {
    // DEBUG:
    // console.log(`Pokemon ${id} clicked? ${clicked}`);
    
    if (clicked) {
      // ASSERT: User has already clicked this Pokémon;
      //         therefore, they lose the game.
      // DEBUG:
      // console.log(
      //   `Pokemon ${id} has already been clicked. You're a loser!`);

      this.setState(this.resetGameState(`${name} has already been clicked. You lose!`));
    } else {
      // ASSERT: User has not already clicked this Pokémon;
      //         therefore, their score increases by five points.
      const pokemonArr = this.shuffle(
        this.state.pokemon.map(pokemon =>
        (pokemon.id === id) ?
        Object.assign(pokemon, { clicked: true }) :
        pokemon
      ));

      // DEBUG:
      // console.log(
      //   `Returned array: ${JSON.stringify(pokemonArr)}`
      // );
      
      this.setState({
          pokemon: pokemonArr, 
          game: Object.assign(
            this.state.game, this.handleScoreIncrease())
      });

      // DEBUG:
      // console.log(`currState=${JSON.stringify(this.state)}`);
    }
  }

  handleScoreIncrease = () => {
    return { score: this.state.game.score + 5 }
  }

  resetGameState = (userMsg) => {
    const pokemonArr = pokemon.map(pokemon => 
      Object.assign(pokemon, { clicked: false }));

    // DEBUG:
    // console.log(`pokemonArr = ${JSON.stringify(pokemonArr)}`);

    return {
      pokemon: pokemonArr,
      game: {
        message: userMsg,
        score: 0,
        topScore: 0
      },
    };
  }

  render() {
    const pokemonImgs = this.state.pokemon.map(pokemon => 
      <Pokemon
        id={pokemon.id}
        key={pokemon.id}
        name={pokemon.name}
        img={pokemon.image}
        clicked={pokemon.clicked}
        handleClick={this.handleClick.bind(this)}
      />
    );

    return (
      <>
        <Header 
          score={this.state.game.score}
          topScore={this.state.game.topScore}
          msg={this.state.game.message}
        />
        <Main>{pokemonImgs}</Main>
        <Footer />
      </>
    );
  }
}

export default App;
