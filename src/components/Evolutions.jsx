import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { capitalize, evoluchain } from '../helpers/frontHelpers'

export default function Evolutions({name, setModal}) {

    const history = useHistory()
    const [evolutions, setEvolutions] = useState({})
    const [pokemon, setPokemon] = useState({})

    const handleEv = e => {
        setModal(false)
        history.push(`/pokemon/${e}`)
        history.go(0)
    }

    useEffect(async () => {
        try {
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            setPokemon(poke.data)
            const res = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${poke.data.id}`)
            setEvolutions(res.data)
            // console.log(res.data)
        } catch (err) { console.log(err) }
    }, [])

    const evolutionChain = evolutions && evolutions.chain ? evoluchain(evolutions.chain) : []

    return evolutions && evolutions.chain ? (
        <div className='evolutions'>
        <img className="modal-poke-img" src={pokemon.sprites.front_shiny} />
                {
                    <div>
                        <h4 className="s-poke-info"> <span className="s-poke-spec">Is baby:</span> {evolutions.chain.is_baby ? 'yes' : 'no'}</h4>
                        <h4 className="s-poke-info"> <span className="s-poke-spec">Species:</span> {capitalize(evolutions.chain.species.name)}</h4>
                        { 
                            evolutionChain.length ? evolutionChain.map((e, i) => 
                           
                                <button key={i} onClick={() => handleEv(e)} className='ev-btns'> 
                                    <h4 className="s-poke-ev"> <span className="s-poke-spec">{++i}° Evolution:</span> {capitalize(e)}</h4>
                                </button>
                        ) 
                        : <span className="s-poke-spec">Not evolve</span>
                        }
                    </div>
                }
        </div>
    )
    :
    <h1 className='loading'>Loading...</h1>
}
