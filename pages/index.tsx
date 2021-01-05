import Head from "next/head";
import type { NextPage } from "next";
import styles from "./Home.module.scss";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Index Page" />
        <title>Create Next App</title>
      </Head>
      <h1>Hello</h1>
      <Link href="/page1">Go to page 1</Link>
    </div>
  );
};

export default Home;
