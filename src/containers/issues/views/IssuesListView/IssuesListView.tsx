import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

import { Button } from "@/components/common/Button";
import { useGetIssuesSuspense } from "@/hooks/queries/useGetIssuesSuspense";
import { useGetSearchIssuesSuspense } from "@/hooks/queries/useGetSearchIssuesSuspense";
import { PATHS } from "@/lib/constants/routes";
import { useAppStore } from "@/store/useAppStore";

import * as S from "./IssuesListView.styled";
import CardTypeList from "../../components/CardTypeList";
import { MoreAction } from "../../components/ListMoreDropDown";
import TableTypeList from "../../components/TableTypeList";

export default function IssuesListView() {
  const router = useRouter();
  const contentViewType = useAppStore((state) => state.contentViewType);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const { data: issues } = useGetIssuesSuspense({
    owner: process.env.NEXT_PUBLIC_OWNER!,
    repo: process.env.NEXT_PUBLIC_REPO!,
    page,
    per_page: 10,
  });

  const { data: issuesDataBySearch } = useGetSearchIssuesSuspense({
    owner: process.env.NEXT_PUBLIC_OWNER!,
    repo: process.env.NEXT_PUBLIC_REPO!,
    title: search,
    page,
    per_page: 10,
  });

  const issueList = search ? issuesDataBySearch?.items ?? [] : issues;

  const isEmptyList = page === 1 && !issueList.length;

  const handleDropDownClick = (issueNumber: number, action: MoreAction) => {
    if (action === MoreAction.Update) {
      router.push(`${PATHS.ISSUES_EDIT}/${issueNumber}`);
    } else if (action === MoreAction.Delete) {
      // TODO: 삭제 API 연동
      console.log("delete", issueNumber);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(inputRef.current?.value.trim() ?? "");
  };

  return (
    <S.Container>
      <h2>서비스 게시판</h2>

      <S.Head>
        <div>
          <form onSubmit={handleSearch}>
            <input
              ref={inputRef}
              type="text"
              defaultValue={search}
              placeholder="검색어를 입력하세요."
            />
            <Button type="submit" size="small">
              검색
            </Button>
          </form>
        </div>

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
                issues={issueList}
                onDropDownClick={handleDropDownClick}
              />
            )}
            {contentViewType === "card" && (
              <CardTypeList
                issues={issueList}
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
