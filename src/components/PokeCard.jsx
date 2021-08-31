import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { capitalize } from '../helpers/frontHelpers'

export default function PokeCard({poke}) {

    const [pokemon, setPokemon] = useState({})

    useEffect(async () => {
        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
            setPokemon(data.data)
        } catch (err) { console.log(err) }
    }, [poke])

    return pokemon.name ? (
        <div className='poke-card'>
            <img className='poke-img' src={pokemon.sprites.front_shiny} />
            <h3 className='poke-name'>{capitalize(pokemon.name)}</h3>
        </div>
    )
    :
    <h3 className='loading'>Loading pokemon...</h3>
}
