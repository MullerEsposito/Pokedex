import React, { Component } from 'react';

import Pokemon from "./Pokemon";

import data from '../data';

class PokemonDetails extends Component {
  constructor(props){
    super(props);
    const { id } = this.props.match.params;
    const favorites = localStorage.getItem('@POKEMON:Favorites') 
      ? JSON.parse(localStorage.getItem('@POKEMON:Favorites'))
      : [];
    const isFavorited = favorites.some(ids => ids === +id);
    this.state = {
      favorites,
      isFavorited,
    }    
  }

  handleOnChange = ({target: { name, checked }}) => {
    const { id } = this.props.match.params;
    const { favorites } = this.state;
    
    if (checked) {
      favorites.push(+id);
      localStorage.setItem('@POKEMON:Favorites', JSON.stringify(favorites));
      this.setState({ [name]: checked })
    } else {
      const favoritesUpdated = favorites.filter(idFavorite => +id !== idFavorite);
      console.log(favoritesUpdated);
      localStorage.setItem('@POKEMON:Favorites', JSON.stringify(favoritesUpdated));
      this.setState({ [name]: checked, favorites: favoritesUpdated });
    }

  }

  render() {
      const { match: { params: { id }}} = this.props;
      
      const { isFavorited } = this.state;
      const [pokemon] = data.filter(pokemon => pokemon.id === +id);

      
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
              <input 
                name="isFavorited" 
                checked={isFavorited} 
                type='checkbox' 
                onChange={this.handleOnChange}
              />
            </label>
          </div>
      );
  };
};

export default PokemonDetails;