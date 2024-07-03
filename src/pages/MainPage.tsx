import Image from "next/image";
import Head from "next/head";

import styles from "../app/page.module.css";
import "../app/globals.css";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import StaticMeals from "@/components/StaticMeals/StaticMeals";

export default function MainPage() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <Hero />
          <About />
          <StaticMeals />
        </div>
      </main>
    </>
  );
}
