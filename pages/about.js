import React from 'react';
import Image from 'next/image';

import styles from "../styles/About.module.scss";

export default function about() {
    return <div className={styles.about} >
        <h1>Sobre o Projeto</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus similique impedit ex omnis repellendus quidem minus, iure voluptatibus autem porro dignissimos, saepe atque aspernatur natus modi in nihil, deserunt delectus!</p>
        <Image src="/images/charizard.png" width="300" height="300" alt="pokemon" />
    </div>;
}
