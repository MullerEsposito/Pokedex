import React, { Component } from 'react';

import Pokemon from "./Pokemon";

import data from '../data';

class PokemonDetails extends Component {
    render() {
        const { match: { params: { id }}} = this.props;
        const [pokemon] = data.filter(pokemon => pokemon.id == id);
        
        return (
           <div>
             <h2>{pokemon.name} Details</h2>
             <Pokemon pokemon={pokemon} />
              
              <h2>Sumary</h2>
              <article>asjdfkasdfaskjdfajsldjf</article>

              <h2>Game locations of {pokemon.name}</h2>
              <p>Mapa com possíveis localizações do Pokémon</p>

              <label htmlFor="checkFavorite">
                Favorite Pokémon?
                <input type='checkbox'/>
              </label>
           </div>
        );
    };
};

export default PokemonDetails;