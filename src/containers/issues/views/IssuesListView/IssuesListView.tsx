import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";

import { Button } from "@/components/common/Button";
import Input from "@/components/common/Input";
import Loading from "@/components/common/Loading";
import Pagination from "@/components/common/Pagination";
import { usePatchIssue } from "@/hooks/mutations/usePatchIssue";
import { useGetIssues } from "@/hooks/queries/useGetIssues";
import { useGetSearchIssues } from "@/hooks/queries/useGetSearchIssues";
import { useQueryString } from "@/hooks/useQueryString";
import { PATHS } from "@/lib/constants/routes";
import { useAppStore } from "@/store/useAppStore";

import * as S from "./IssuesListView.styled";
import CardTypeList from "../../components/CardTypeList";
import { MoreAction } from "../../components/ListMoreDropDown";
import TableTypeList from "../../components/TableTypeList";

export default function IssuesListView() {
  const router = useRouter();
  const contentViewType = useAppStore((state) => state.contentViewType);

  const {
    queries: { page, search },
    setQueries,
  } = useQueryString({
    initialQueries: {
      page: "1",
      search: "",
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const { data: issues, isLoading } = useGetIssues({
    owner: process.env.NEXT_PUBLIC_OWNER!,
    repo: process.env.NEXT_PUBLIC_REPO!,
    page: Number(page),
    per_page: 10,
  });

  const { data: issuesDataBySearch, isLoading: isSearching } =
    useGetSearchIssues({
      owner: process.env.NEXT_PUBLIC_OWNER!,
      repo: process.env.NEXT_PUBLIC_REPO!,
      title: search,
      page: Number(page),
      per_page: 10,
    });

  const { mutateAsync: patchIssueAsync, isPending: isPatching } =
    usePatchIssue();

  const issueList = search ? issuesDataBySearch?.items ?? [] : issues ?? [];

  const isEmptyList = Number(page) === 1 && !issueList.length;

  const handleDropDownClick = async (
    issueNumber: number,
    action: MoreAction
  ) => {
    if (action === MoreAction.Update) {
      await router.push(`${PATHS.ISSUES_EDIT}/${issueNumber}`);
    } else if (action === MoreAction.Delete) {
      await patchIssueAsync({
        owner: process.env.NEXT_PUBLIC_OWNER!,
        repo: process.env.NEXT_PUBLIC_REPO!,
        issue_number: issueNumber,
        state: "closed",
      });
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueries({
      page: "1", // 검색 시에는 1페이지부터 다시 조회
      search: inputRef.current?.value.trim() ?? "",
    });
  };

  if (isLoading || isSearching) {
    return <Loading message="게시글을 불러오는 중입니다." />;
  }
  if (isPatching) {
    return <Loading message="게시글을 삭제하는 중입니다." />;
  }

  return (
    <S.Container>
      <h2>서비스 게시판</h2>

      <S.Head>
        <div>
          <form onSubmit={handleSearch}>
            <Input
              ref={inputRef}
              type="text"
              defaultValue={search}
              placeholder="검색어를 입력하세요."
              hasSubmitButton
              submitButtonLabel="🔍"
            />
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

        <S.ActionContainer>
          <Pagination
            count={8}
            page={Number(page)}
            onPrev={() => setQueries({ page: String(Number(page) - 1) })}
            onNext={() => setQueries({ page: String(Number(page) + 1) })}
            onPage={(page) => setQueries({ page: String(page) })}
          />
        </S.ActionContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
