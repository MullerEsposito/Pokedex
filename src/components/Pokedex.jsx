import React from 'react';

import Pokemon from './Pokemon';
import Input from "./Input";
import './Pokedex.css'

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        const { pokemons } = this.props;

        this.state = {
            activeButton: {},
            pokemons: pokemons,
            pokemon: pokemons[0],
        };
        this.handleNextPokemon = this.handleNextPokemon.bind(this);
        this.handleFilterType = this.handleFilterType.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);
    }

    componentDidUpdate(){
        const { pokemons } = this.state ;
        const nextButton = document.getElementById('next-button');

        if (pokemons.length < 2) {
            nextButton.setAttribute('disabled', true);
        }else{
            nextButton.removeAttribute('disabled');
        }
    }

    handleNextPokemon() {
        const { pokemons } = this.state;
        const activePokemon = this.state.pokemon;

        const idxActivePokemon = pokemons.findIndex(pokemon => {
            return pokemon.id === activePokemon.id
        });

        const idxNextPokemon = pokemons.length === (idxActivePokemon + 1) ? 0 : (idxActivePokemon + 1);

        this.setState({
            pokemon: pokemons[idxNextPokemon]
        })
    }

    handleFilterType(e) {
        const activeButton = this.state.activeButton;
        const type = e.props.children;

        if (Object.keys(activeButton).length > 0) {
            activeButton.setState({
                isActive: false
            })
        }
        
        const filteredPokemon = type === "All" 
        ? this.props.pokemons
        : this.props.pokemons.filter(pokemon => pokemon.type === type);

        this.setState({
            pokemons: filteredPokemon,
            pokemon: filteredPokemon[0],
            activeButton: e,
        })

    }

    handleResetFilter(){
        const { pokemons } = this.props;
        const { activeButton } = this.state;
        
        activeButton.setState({
            isActive: false
        });

        this.setState({
            pokemons: pokemons,
            pokemon: pokemons[0],
            activeButton: {},
        });
    }
    

    render() {
        const { pokemon } = this.state;
        const { pokemons } = this.props;

        const pokemonInputs = pokemons.groupBy(
            groupBy => groupBy.type,
            pokemon => pokemon).map(type => (
                    <Input onClick={(e)=> this.handleFilterType(e)} id={type[0].toLowerCase()} key={type[0]}>
                        {type[0]}
                    </Input>
                ));
                

        return (
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon} />
                <div className="container-buttons">

                    <Input onClick={(e)=> this.handleFilterType(e)} id="all" defaultChecked={true}>
                        All
                    </Input>
                    {pokemonInputs}
                </div>
                <button id="next-button" className="button-next" onClick={this.handleNextPokemon}>Next Pokémon</button>
            </div>
        );
    }
}

export default Pokedex;