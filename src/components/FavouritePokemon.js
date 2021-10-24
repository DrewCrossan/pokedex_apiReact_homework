import React from 'react';

const FavouritePokemon = ({favouritePokemon}) => {

    

    const pokemonItems = favouritePokemon.map((pokemon, index) => {
        return <><div key={index}><img src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
        <p>#0{pokemon.id} {pokemon.name}... I choose you!</p>
        </>
    })

    return (
        <ul>
            {pokemonItems}
        </ul>
    )

}

export default FavouritePokemon;