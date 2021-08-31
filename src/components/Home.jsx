import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Welcome from "./Welcome";
import PokeCard from "./PokeCard";
import Header from "./Header";
import Pagination from "./Pagination";
import { shuffle } from "../helpers/frontHelpers";

export default function Home() {
  const [welcome, setWelcome] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pokemonsByPage] = useState(12);

  let iLast = currentPage * pokemonsByPage;
  let iFirst = iLast - pokemonsByPage;
  if (iFirst >= pokemons.length) iFirst = 0;
  let currentPokes = pokemons.slice(iFirst, iLast);

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  setTimeout(() => setWelcome(false), 3000);

  useEffect(async () => {
    try {
      const pokes = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=60&limit=60"
      );
      setPokemons(shuffle(pokes.data.results));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return welcome ? (
    <Welcome />
  ) : currentPokes.length ? (
    <div className="home">
      <Header />
      <div className="poke-list">
        {
          currentPokes.map((poke, i) => (
            <Link
              key={i}
              to={`/pokemon/${poke.name}`}
              style={{ textDecoration: "none" }}
            >
              <PokeCard poke={poke} />
            </Link>
          ))
        }
      </div>
      <div className="div-pagination">
        <Pagination
          pokemonsByPage={pokemonsByPage}
          totalPokemons={pokemons.length}
          paginate={paginate}
        />
      </div>
    </div>
  ) : (
    <h1 className="loading">Loading...</h1>
  );
}
