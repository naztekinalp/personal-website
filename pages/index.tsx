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
        <mieta name="description" content="Hi, I’m Naz Tekinalp! Welcome to my corner of the web! I’m a Senior Software QA Engineer passionate about hgh-quality products and sharing my tech journey. Let’s connect! ✨" />
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
