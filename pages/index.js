/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Home({ pokemon }) {
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID, "mii");

  return (
    <div className={styles.container}>
      <Head>
        <title>Fandy - Pokemon List- test deploy to vercel</title>
      </Head>
      <h1>Fandy Test Domain - Pokemon List - vvv</h1>
      <h2>Pokemon List</h2>
      <h2>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</h2>

      <div className={styles.grid}>
        {pokemon?.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
