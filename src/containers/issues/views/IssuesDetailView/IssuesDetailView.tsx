import { useRouter } from "next/router";

import { PATHS } from "@/lib/constants/routes";

import * as S from "./IssuesDetailView.styled";

interface Props {
  id: number;
}

export default function IssuesDetailView({ id }: Props) {
  const router = useRouter();

  return (
    <S.Container>
      이슈 상세 페이지
      <button onClick={() => router.push(`${PATHS.ISSUES_EDIT}/${id}`)}>
        수정
      </button>
    </S.Container>
  );
}
