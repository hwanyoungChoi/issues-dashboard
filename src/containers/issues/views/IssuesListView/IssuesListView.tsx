import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Button } from "@/components/common/Button";
import { useGetIssuesSuspense } from "@/hooks/queries/useGetIssuesSuspense";
import { PATHS } from "@/lib/constants/routes";
import { useAppStore } from "@/store/useAppStore";

import * as S from "./IssuesListView.styled";
import CardTypeList from "../../components/CardTypeList";
import { MoreAction } from "../../components/ListMoreDropDown";
import TableTypeList from "../../components/TableTypeList";

export default function IssuesListView() {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const { data: issues } = useGetIssuesSuspense({
    owner: process.env.NEXT_PUBLIC_OWNER!,
    repo: process.env.NEXT_PUBLIC_REPO!,
    page,
    per_page: 10,
  });

  const contentViewType = useAppStore((state) => state.contentViewType);

  const isEmptyList = page === 1 && !issues.length;

  const handleDropDownClick = (issueNumber: number, action: MoreAction) => {
    if (action === MoreAction.Update) {
      router.push(`${PATHS.ISSUES_EDIT}/${issueNumber}`);
    } else if (action === MoreAction.Delete) {
      // TODO: 삭제 API 연동
      console.log("delete", issueNumber);
    }
  };

  return (
    <S.Container>
      <h2>서비스 게시판</h2>

      <S.Head>
        <div>Input Area</div>

        <Link href={PATHS.ISSUES_EDIT}>
          <Button theme="primary">등록</Button>
        </Link>
      </S.Head>

      <S.InnerContainer>
        {isEmptyList ? (
          <S.Empty>등록된 게시글이 없습니다.</S.Empty>
        ) : (
          <>
            {contentViewType === "list" && (
              <TableTypeList
                issues={issues}
                onDropDownClick={handleDropDownClick}
              />
            )}
            {contentViewType === "card" && (
              <CardTypeList
                issues={issues}
                onDropDownClick={handleDropDownClick}
              />
            )}
          </>
        )}

        {/* TODO: 페이지네이션 */}
        <Button onClick={() => setPage(page - 1)}>전페이지</Button>
        <Button onClick={() => setPage(page + 1)}>다음페이지</Button>
      </S.InnerContainer>
    </S.Container>
  );
}
