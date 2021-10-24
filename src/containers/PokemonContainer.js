import React, {useState, useEffect} from 'react';
import PokemonSelector from '../components/PokemonSelect';

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null);

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

    return (
        <div className="main-container">
            <PokemonSelector pokemons={pokemons} onPokemonSelected={onPokemonSelected} />
            {/* {selectedPokemon ? <PokemonDetail selectedPokemon={selectedPokemon} /> : null} */}
            
        </div>
    )

}

export default PokemonContainer; 