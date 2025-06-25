import Head from "next/head";

import IssuesEditView from "@/containers/issues/views/IssuesEditView";

export default function IssuesCreatePage() {
  return (
    <>
      <Head>
        <title>게시글 생성</title>
      </Head>

      <IssuesEditView />
    </>
  );
}
