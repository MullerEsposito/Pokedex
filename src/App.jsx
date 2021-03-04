/* eslint-disable no-extend-native */
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './App.css';
import pokemons from './data';

import Pokedex from './components/Pokedex';
import PokemonDetails from "./components/PokemonDetails";
import About from "./components/About";
import NotFound from "./components/NotFound";

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
      <BrowserRouter>
      <h1> Pokedex </h1>
      <ul style={{ listStyle: 'none', display: 'inline-flex' }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/favorites'>Favorites Pokémons</Link></li>
      </ul>
        <Switch>
          <Route path='/details/:id' render={(props) => <PokemonDetails {...props} />} />
          <Route path='/about' component={About} />
          <Route exact path='/' render={() => <Pokedex pokemons={pokemons} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;