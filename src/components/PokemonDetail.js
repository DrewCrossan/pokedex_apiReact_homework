import React from 'react';
// import PokemonContainer from '../containers/PokemonContainer';

const PokemonDetail = ({selectedPokemon, addPokemon}) => {


    const pokemonTypes = selectedPokemon.types.map(element => {
        return <>{element.type.name} </>;
    })

    const pokemonWeight = selectedPokemon.weight / 10

    const capitaliseName = (name) => {
        return name[0].toUpperCase() + name.slice(1);
    }

    const handleClick = () => {
        addPokemon();
    }
    

// console.log(selectedPokemon.stats[0].base_stat);

    return (
        <div>
            <h1>{capitaliseName(selectedPokemon.name)}</h1>
            <img src={selectedPokemon.sprites.other.dream_world.front_default} alt={selectedPokemon.name} width="200px"/>
            <h3>Types: {pokemonTypes}</h3>
            <h3>Average height: {selectedPokemon.height}0cm</h3>
            <h3>Average weight: {pokemonWeight}kg</h3>
            <h3>Base stats: </h3>
            <p>hp: {selectedPokemon.stats[0].base_stat}</p>
            <p>att: {selectedPokemon.stats[1].base_stat}</p>
            <p>def: {selectedPokemon.stats[2].base_stat}</p>
            <button onClick={handleClick} >Add to Team</button>


            
        </div>
    )
}

export default PokemonDetail;