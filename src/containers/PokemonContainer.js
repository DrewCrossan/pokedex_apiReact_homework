import React, {useState, useEffect} from 'react';
import PokemonSelector from '../components/PokemonSelect';
import PokemonDetail from '../components/PokemonDetail';
import FavouritePokemon from '../components/FavouritePokemon';

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [favouritePokemon, setFavouritePokemon] = useState([]);

    const getPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        const data = await res.json()

        const createPokemonObject = (result) => {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setPokemons(currentList => [...currentList, data])
            })
            console.log(pokemons);    
        }
        createPokemonObject(data.results);
    }


    useEffect(() => {
        getPokemons();
    }, [])

    const onPokemonSelected = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    const addPokemon = () => {
        const updatedFavs = [...favouritePokemon, selectedPokemon];
        setFavouritePokemon(updatedFavs);
    }

    return (
        <div className="main-container">
            <PokemonSelector pokemons={pokemons} onPokemonSelected={onPokemonSelected} />
            {selectedPokemon ? <PokemonDetail selectedPokemon={selectedPokemon} addPokemon={addPokemon}/> : null}
            <FavouritePokemon favouritePokemon={favouritePokemon} />
            
        </div>
    )

}

export default PokemonContainer; 