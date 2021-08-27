import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Welcome from './Welcome'
import PokeCard from './PokeCard'
import Header from './Header'

export default function Home() {

    const [welcome, setWelcome] = useState(true)
    const [pokemons, setPokemons] = useState([])
    setTimeout(() => setWelcome(false), 3000)

    const shuffle = (arr) => {
        let current = arr.length, rand
        while (0 !== current) {
            rand = Math.floor(Math.random() * current)
            current--
            [arr[current], arr[rand]] = [
                arr[rand],
                arr[current],
            ]
        }
        return arr
    }

    useEffect(async () => {
        try {
            const pokes = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50')
            setPokemons(shuffle(pokes.data.results))
        } catch (err) { console.log(err) }
    }, [])

    return welcome ? <Welcome/> : pokemons.length ? (
        <div className='home'>
            <Header/>
                <div className='poke-list'>
                    { 
                        pokemons.map((poke, i) => 
                        <Link  key={i} to={`/pokemon/${poke.name}`} style={{ textDecoration: 'none' }}>
                            <PokeCard poke={poke}/> 
                        </Link>
                    )}
                </div>
        </div>
    )
    :
    <h1 className='loading'>Loading...</h1>
}
