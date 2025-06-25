import Head from "next/head";

import IssuesListView from "@/containers/issues/views/IssuesListView";

export default function IssuesPage() {
  return (
    <>
      <Head>
        <title>Dashboard - Issues</title>
      </Head>

      <IssuesListView />
    </>
  );
}
