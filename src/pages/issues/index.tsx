import Head from "next/head";

import IssuesListView from "@/containers/issues/views/IssuesListView";

export default function IssuesListPage() {
  return (
    <>
      <Head>
        <title>서비스 게시판</title>
      </Head>

      <IssuesListView />
    </>
  );
}
