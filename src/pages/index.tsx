import Head from "next/head";

import HomeView from "@/containers/home/views";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
      </Head>

      <HomeView />
    </>
  );
}
