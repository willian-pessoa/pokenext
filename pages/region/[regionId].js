import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.scss"
import Image from 'next/image';
import Cards from "../../components/Cards"

export const getStaticPaths = async () => {

  const api = "https://pokeapi.co/api/v2/region/";

  const res = await fetch(api)
  const data = await res.json();

  // params
  const paths = data.results.map((region, index) => {
    return {
      params: { regionId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }

}

export const getStaticProps = async (context) => {

  const id = context.params.regionId;

  const res = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)

  const data = await res.json()

  // add pokemon index
  data.pokemon_species.forEach((item) => {
    let findNumber = item["url"].match(/\/[\d]+\//g);
    let number = findNumber[0].match(/[\d]+/g);
    item.id = number[0];
  })

  data.pokemon_species.sort(function(a,b) {
    if(Number(a.id) < Number(b.id)) return -1;
    if(Number(a.id) > Number(b.id)) return 1;
    return 0;
  });


  return {
    props: { pokemons: data.pokemon_species },
  }

}

export default function RegionName({ pokemons }) {

  return <>
    <div className={styles.container_title} >
      <h1 className={styles.title} >Poke<span>Next</span></h1>
      <Image src="/images/pokeball.png" width={50} height={50} />
    </div>
    <div className={styles.pokemon_container} >
      {pokemons.map((pokemon) => (
        <Cards key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  </>;
}
