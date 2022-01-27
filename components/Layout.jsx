import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}) {
  return <div>
      <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <title>Pokenext</title>
      </Head>
      <Navbar />
      <main className="main-container" >{children}</main>
      <Footer />
  </div>;
}
