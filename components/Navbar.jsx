import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return <nav className={styles.navbar}>
    <Link href="/">
      <div className={styles.logo} >
          <Image src="/images/pokeball.png" width="30" height="30" alt="pokenext" />
          <h1>PokeNext</h1>
      </div>
    </Link>
      <ul className={styles.link_items}>
          <li>
              <Link href="/">
                <a>Home</a>
              </Link>
          </li>
          <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
          </li>
      </ul>
  </nav>;
}
