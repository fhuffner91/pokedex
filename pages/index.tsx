import { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Navbar from "../src/components/Navbar";
import LoginInput from "../src/components/LoginInput";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonId, setPokemonId] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        setPokemonName(data.results.map((pokemon: { name: any; }) => pokemon.name));
        setPokemonId(data.results.map((pokemon: { url: string; }) => pokemon.url.split('/')[6]));
        console.log(data.results);
      })
  }, [])

  return (
    <>
    <Navbar />
   <LoginInput />
    </>
  )
}