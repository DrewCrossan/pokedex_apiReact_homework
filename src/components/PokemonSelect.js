import React from 'react';

const PokemonSelector = ({pokemons, onPokemonSelected}) => {

    const handleChange = (event) => {
        const chosenPokemon = pokemons[event.target.value];
        onPokemonSelected(chosenPokemon);
    }
    
    const pokemonOptions = pokemons.map((pokemon, index) => {
        return <option value={index} key={index}>#{pokemon.id} {pokemon.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Select a Pokemon</option>
            {pokemonOptions}
        </select>
    )
}



export default PokemonSelector;