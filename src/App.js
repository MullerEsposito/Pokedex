/* eslint-disable no-extend-native */
import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';

Array.prototype.groupBy = function(groupBy, mapOutput) {
  let obj = {};
  
  this.forEach(item => {
      obj[groupBy(item)] = [];
  })

  this.forEach(item => {
      obj[groupBy(item)].push(mapOutput(item));
      
  })
  return Object.entries(obj);

}

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;