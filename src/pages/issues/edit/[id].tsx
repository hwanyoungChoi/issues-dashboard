import Head from "next/head";
import { useRouter } from "next/router";

import IssuesEditView from "@/containers/issues/views/IssuesEditView";

export default function IssuesUpdatePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>게시글 수정 - {id}</title>
      </Head>

      <IssuesEditView id={Number(id)} />
    </>
  );
}
