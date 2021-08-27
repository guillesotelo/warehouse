import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Header from "./Header";
import Evolutions from "./Evolutions";
import "bootstrap/dist/css/bootstrap.min.css";
import { capitalize } from '../helpers/frontHelpers'

export default function PokeCard() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(async () => {
    try {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(data.data);
    //   console.log("pokemon: ", pokemon);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return pokemon.name ? (
    <div>
      <Header />
      <div className="single-poke">
        <img className="s-poke-img" src={pokemon.sprites.front_shiny} />
        <div>
          <h3 className="s-poke-name">{capitalize(pokemon.name)}</h3>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Level</span> &nbsp;
            {pokemon.base_experience}
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Abilities:</span> &nbsp;
            {pokemon.abilities.length > 1
              ? pokemon.abilities.map((a) => a.ability.name + ", ")
              : pokemon.abilities[0].ability.name}
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Height:</span> &nbsp;{pokemon.height}{" "}
            In.
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Held items:</span> &nbsp;
            {pokemon.held_items.length
              ? pokemon.held_items.map((i) => i.item.name + ", ")
              : "no items"}
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Power:</span> &nbsp;
            {pokemon.stats.map((s) => {
              if (s.stat.name === "hp") return s.base_stat;
            })}
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Attack:</span> &nbsp;
            {pokemon.stats.map((s) => {
              if (s.stat.name === "attack") return s.base_stat;
            })}
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Defense:</span> &nbsp;
            {pokemon.stats.map((s) => {
              if (s.stat.name === "defense") return s.base_stat;
            })}
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Speed:</span> &nbsp;
            {pokemon.stats.map((s) => {
              if (s.stat.name === "speed") return s.base_stat;
            })}
          </h4>
          <h4 className="s-poke-info">
            <span className="s-poke-spec">Types:</span> &nbsp;
            {pokemon.types.length > 1
              ? pokemon.types.map((t) => t.type.name + ", ")
              : pokemon.types[0].type.name}
          </h4>
          <button className="ev-btn" onClick={() => setModal(true)}>
            Evolutions
          </button>
        </div>
        <Modal
          isOpen={modal}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "800px",
            maxHeight: "600px",
            width: "80%",
            height: "90%",
          }}
        >
          <ModalHeader>
            Evolution of {capitalize(name)}
            <Button
              color="secondary"
              className="modal-btn"
              onClick={() => setModal(false)}
            >
              X
            </Button>
          </ModalHeader>
          <ModalBody>
            <Evolutions name={name} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    </div>
  ) : (
    <div>
      <Header />
      <h1 className="loading">Loading Pokemon...</h1>
    </div>
  );
}
