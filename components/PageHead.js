import Head from "next/head";
import React from "react";

export default function PageHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link rel="icon" href="/fav.ico" />
    </Head>
  );
}
