import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import styles from "../styles/index.module.scss";
import Background from "../components/background/background";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naz Tekinalp</title>
        <meta name="description" content="Personal website of Naz Tekinalp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.page}>
        <Hero />
      </div>
        <Background />
      
    </div>
  );
};

export default Home;
