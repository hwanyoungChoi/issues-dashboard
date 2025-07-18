import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/common/Button";
import Loading from "@/components/common/Loading";
import { usePatchIssue } from "@/hooks/mutations/usePatchIssue";
import { useGetIssue } from "@/hooks/queries/useGetIssue";
import { GET_SEARCH_ISSUES_QUERY_KEY } from "@/hooks/queries/useGetSearchIssues";
import queryClient from "@/lib/api/queryClient";
import { DATE_FORMAT } from "@/lib/constants/date";
import { PATHS } from "@/lib/constants/routes";

import * as S from "./IssuesDetailView.styled";
import ListMoreDropDown, {
  MoreAction,
} from "../../components/ListMoreDropDown";

interface Props {
  id: number;
}

export default function IssuesDetailView({ id }: Props) {
  const router = useRouter();

  const { data: issue, isLoading } = useGetIssue({
    owner: process.env.NEXT_PUBLIC_OWNER!,
    repo: process.env.NEXT_PUBLIC_REPO!,
    issue_number: id,
  });

  const { mutate: patchIssue, isPending: isPatching } = usePatchIssue({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_SEARCH_ISSUES_QUERY_KEY],
      });
      router.replace(PATHS.ISSUES);
    },
  });

  const { title, created_at, body } = issue ?? {};

  const handleDropDownClick = (action: MoreAction) => {
    if (action === MoreAction.Update) {
      router.push(`${PATHS.ISSUES_EDIT}/${id}`);
      return;
    }
    if (action === MoreAction.Delete) {
      patchIssue({
        owner: process.env.NEXT_PUBLIC_OWNER!,
        repo: process.env.NEXT_PUBLIC_REPO!,
        issue_number: id,
        state: "closed",
      });
    }
  };

  if (isLoading || !issue) {
    return <Loading message="게시글을 불러오는 중입니다." />;
  }
  if (isPatching) {
    return <Loading message="게시글을 삭제하는 중입니다." />;
  }

  return (
    <S.Container>
      <h2>서비스 게시판</h2>

      <S.InnerContainer>
        <S.MoreWrapper>
          <ListMoreDropDown onClick={handleDropDownClick} />
        </S.MoreWrapper>

        <S.Title>{title}</S.Title>
        <S.Date>{dayjs(created_at).format(DATE_FORMAT.YYYYMMDD_HHmmss)}</S.Date>
        <hr />

        <S.Content>{body}</S.Content>
        <hr />

        <S.ActionContainer>
          <Link href={PATHS.ISSUES} replace>
            <Button>목록</Button>
          </Link>
        </S.ActionContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
