import Head from "next/head";

import HomeView from "@/containers/home/views";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>홈</title>
      </Head>

      <HomeView />
    </>
  );
}
