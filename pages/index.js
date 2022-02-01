import Image from 'next/image';
import styles from '../styles/Home.module.scss'

import Cards from '../components/Cards';
import { useEffect, useState } from 'react';

export async function getStaticProps() {

  const randomPokemons = Array.from({ length: 8 }, () => Math.floor(Math.random() * 858) + 1);

  const api = "https://pokeapi.co/api/v2/pokemon/";

  const data = [];

  for (let i in randomPokemons) {
    let pokeName = await fetch(api + randomPokemons[i])
    let pokeName2 = await pokeName.json()
    data.push({ name: pokeName2.species.name, id: randomPokemons[i] })
  }

  return {
    props: {
      pokemons: data,
    },
  }
}

export default function Home({ }) {
  const [pokemon, setPokemon] = useState({ id: 493, name: "arceus" })

  const handleOnClick = () =>{
    let randomPokemon = Math.floor(Math.random() * 858) + 1;

    const api = "https://pokeapi.co/api/v2/pokemon/";

    fetch(api+randomPokemon)
    .then(res => res.json())
    .then(
      (data) => {
        setPokemon({ name: data.species.name, id: randomPokemon })
      },
      // Nota: é importante lidar com errros aqui
      // em vez de um bloco catch() para não receber
      // exceções de erros reais nos componentes.
      (error) => {
        console.log(error);
      }
    )
  }

  return (
    <>
      <div className={styles.container_title} >
        <h1 className={styles.title} >Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width={50} height={50} />
      </div>
      <div className={`${styles.pokemon_container} ${styles.random_container}`} >
        <Cards key={pokemon.id} pokemon={pokemon} />
        <button className={styles.random_btn} onClick={()=>handleOnClick()}><h1>Random Pokemon</h1></button>
      </div>
    </>
  )
}
