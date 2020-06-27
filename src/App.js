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

    this.state = 
      this.resetGameState('Click a Pokémon to begin!', 0, 0);
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

    return shuffledArr;
  }

  handleClick = (id, name, clicked) => {
    // DEBUG:
    // console.log(`You clicked ${name}.`);

    if (clicked) {
      // ASSERT: User has already clicked this Pokémon;
      //         therefore, they lose the game.
      this.setState(
        this.resetGameState(
          `${name} has already been clicked. You lose!`,
          this.state.game.score,
          this.state.game.topScore
      ));
    } else {
      // ASSERT: User has not already clicked this Pokémon;
      //         therefore, their score increases by five points.
      const updatedGame = this.handleScoreIncrease(name);
      
      if (this.state.game.score === this.state.pokemon.length * 5) {
        this.setState(
          this.resetGameState(
            `CONGRATULATIONS! YOU WON THE GAME!!`,
            this.state.game.score,
            this.state.game.topScore
        ));        
      } else {
        // 1. Set this Pokémon's clicked state to true
        // 2. Shuffle "the deck." 
        const pokemonArr = this.shuffle(
          this.state.pokemon.map(pokemon =>
          (pokemon.id === id) ?
          Object.assign(pokemon, { clicked: true }) :
          pokemon
        ));
  
        this.setState({
          pokemon: pokemonArr,
          game: updatedGame
        });
      }
    }
  }

  handleScoreIncrease = (pokemonName) => 
    Object.assign(
      this.state.game, { 
        score: this.state.game.score + 5,
        message: `${pokemonName} was an excellent choice!`
      }
    );

  resetGameState = (userMsg, gameScore, userTopScore) => {
    const pokemonArr = pokemon.map(pokemon => 
      Object.assign(pokemon, { clicked: false }));

    return {
      pokemon: pokemonArr,
      game: {
        message: userMsg,
        score: 0,
        topScore: Math.max(gameScore, userTopScore)
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
