import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/common/Button";
import { usePatchIssue } from "@/hooks/mutations/usePatchIssue";
import { useGetIssue } from "@/hooks/queries/useGetIssue";
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

  const { data: issue } = useGetIssue({
    owner: process.env.NEXT_PUBLIC_OWNER!,
    repo: process.env.NEXT_PUBLIC_REPO!,
    issue_number: id,
  });

  const { mutateAsync: patchIssueAsync } = usePatchIssue();

  const { title, created_at, body } = issue ?? {};

  const handleDropDownClick = async (action: MoreAction) => {
    if (action === MoreAction.Update) {
      await router.push(`${PATHS.ISSUES_EDIT}/${id}`);
    } else if (action === MoreAction.Delete) {
      await patchIssueAsync({
        owner: process.env.NEXT_PUBLIC_OWNER!,
        repo: process.env.NEXT_PUBLIC_REPO!,
        issue_number: id,
        state: "closed",
      });

      await router.replace(PATHS.ISSUES);
    }
  };

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
