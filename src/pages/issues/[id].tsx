import Head from "next/head";
import { useRouter } from "next/router";

import IssuesDetailView from "@/containers/issues/views/IssuesDetailView";

export default function IssuesDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>게시글 상세 - {id}</Head>

      <IssuesDetailView id={Number(id)} />
    </>
  );
}
