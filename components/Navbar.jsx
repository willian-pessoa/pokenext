import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const api = "https://pokeapi.co/api/v2/region";

    fetch(api)
      .then(res => res.json())
      .then(
        (data) => {
          data.results.forEach((item, index) => {
            item.id = index + 1
          })
          setRegions(data.results);
        },
        // Nota: é importante lidar com errros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/images/pokeball.png"
            width="30"
            height="30"
            alt="pokenext"
          />
          <h1>PokeNext</h1>
        </div>
      </Link>

      <ul className={styles.link_items}>
        {regions.map((region)=>{
          return <li key={region.name}>
            <Link href={`/region/${region.id}`}>
              <a>{region.name}</a>
            </Link>
          </li>
        })}
      </ul>

      <ul className={styles.link_items}>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
