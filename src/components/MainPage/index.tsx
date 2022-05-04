import Image from "next/image";
import { useEffect, useState } from "react";
import { MainPageStyles } from "./styles";

export default function MainPage() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonId, setPokemonId] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        setPokemonName(
          data.results.map((pokemon: { name: string }) => pokemon.name)
        );
        setPokemonId(
          data.results.map(
            (pokemon: { url: string }) => pokemon.url.split("/")[6]
          )
        );
        setPokemonType(
          data.results.map((pokemon: { type: string }) => pokemon.type)
        );
        setPokemonImage(
          data.results.map((pokemon: { url: string }) => pokemon.url)
        );
        console.log(data.results);
      });
  }, []);

  return (
    <MainPageStyles>
      <div className="main">
        <div className="part1">
          <h1>{pokemonName[0]}</h1>
          <div className="card">
            <Image src="/images/thumbnails-compressed/001.png" width="100px" height="100px"/>
          </div>
          <div className="type">
            <p>Type</p>
            <button>GRASS</button>
            <button>POISON</button>
          </div>
          <div className="heightAndWeight">
            <div className="height">
              <p>height: 204 / 0.7m</p>
            </div>
            <div className="weight">
              <p>weight: 15.2lbs. / 6.9kg</p>
            </div>
          </div>
          <div className="attributes">
            <p>Attributes</p>
            <div className="up">
              <button>45 HP</button>
              <button>45 SPEED</button>
              <button>49 ATK</button>
            </div>
            <div className="down">
              <button>49 DEF</button>
              <button>65 SP. ATK.</button>
              <button>65 SP. DEF.</button>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="evolution">
            <p>Evolution</p>
            <div className="images"></div>
          </div>
          <div className="text2">
            <p></p>
          </div>
        </div>
      </div>
    </MainPageStyles>
  );
}
