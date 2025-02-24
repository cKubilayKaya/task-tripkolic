import Head from "next/head";
import React from "react";

export default function PageHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/fav.ico" />
    </Head>
  );
}
