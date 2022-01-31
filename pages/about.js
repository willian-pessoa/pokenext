import React from 'react';
import Image from 'next/image';

import styles from "../styles/About.module.scss";

export default function about() {
    return <div className={styles.about} >
        <h1>Sobre o Projeto</h1>
        <p>Projeto de uma pokedex em NextJs para praticar o framework, nele você pode consultar todos os pokemons.</p>
        <Image src="/images/charizard.png" width="300" height="300" alt="pokemon" />
    </div>;
}
