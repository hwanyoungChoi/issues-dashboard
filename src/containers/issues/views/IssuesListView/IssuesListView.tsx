import Link from "next/link";

import { PATHS } from "@/lib/constants/routes";

import * as S from "./IssuesListView.styled";

export default function IssuesListView() {
  return (
    <S.Container>
      이슈 목록 페이지
      <br />
      <Link href={PATHS.ISSUES_EDIT}>게시글 생성</Link>
      <br />
      <Link href={`${PATHS.ISSUES_EDIT}/1`}>임시 이슈 1</Link>
    </S.Container>
  );
}
