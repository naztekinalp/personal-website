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
        <meta name="description" content="Hi, I’m Naz! Welcome to my corner of the web! I’m a Senior Software QA Engineer passionate about high-quality products and sharing my tech journey. Let’s connect!" />
        <link rel="shortcut icon" href="/PATH_TO_STATIC_FAVICON/favicon.ico" type="image/x-icon">
<link rel="icon" href="/PATH_TO_ANIMATED_FAVICON/favicon.ico" type="image/x-icon"></link>
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
