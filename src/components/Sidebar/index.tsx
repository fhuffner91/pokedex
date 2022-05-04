import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SidebarStyles } from "./styles";



export default function Sidebar() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonId, setPokemonId] = useState([]);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    console.log("clicked");
    };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        setPokemonName(data.results.map((pokemon: { name: string; }) => pokemon.name));
        setPokemonId(data.results.map((pokemon: { url: string; }) => pokemon.url.split('/')[6]));
        console.log(data.results);
      })
  }, [])
  return (
    <SidebarStyles>
        <div className="container">
        <div className="aside">
            <div className="logo">
            <Image src="/images/logo-pokedex.png" width="230px" height="50px" alt="logo-pokedex" />
            </div>
            <div className="text">
                <p>Everything you wanted to know about your favorite pocket monsters!</p>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <div className="content">
                <ul>
                 { pokemon.map((pokemon, index) => {
                  return(
                    <li key={index}>
                      <Link href={`/pokemon/${pokemonId[index]}`}>
                        <a>{pokemonName[index]}</a>
                      </Link>
                    </li>
                  )
                 })}
                </ul>
            </div>
        </div>
      </div>
    </SidebarStyles>
  );
}