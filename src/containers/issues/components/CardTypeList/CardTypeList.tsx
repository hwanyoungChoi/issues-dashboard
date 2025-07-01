import dayjs from "dayjs";

import { DATE_FORMAT } from "@/lib/constants/date";
import { PATHS } from "@/lib/constants/routes";
import { TIssue } from "@/types/issue";

import * as S from "./CardTypeList.styled";
import ListMoreDropDown, { MoreAction } from "../ListMoreDropDown";

interface Props {
  issues: TIssue[];
  onDropDownClick: (issueNumber: number, action: MoreAction) => void;
}

export default function CardTypeList({ issues, onDropDownClick }: Props) {
  return (
    <S.Grid>
      {issues.map((issue: TIssue) => (
        <S.Card key={issue.id}>
          <S.CardTitle>
            <S.Title
              href={
                issue.state === "open" ? `${PATHS.ISSUES}/${issue.number}` : ""
              }
              state={issue.state}
            >
              {issue.title}
            </S.Title>
          </S.CardTitle>
          <S.CardDetail>
            <div>{issue.user?.login}</div>
            <div>
              {dayjs(issue.created_at).format(DATE_FORMAT.YYYYMMDD_HHmmss)}
            </div>
          </S.CardDetail>

          <S.CardMoreWrapper>
            <ListMoreDropDown
              onClick={(action) => onDropDownClick(issue.number, action)}
              disabled={issue.state !== "open"}
            />
          </S.CardMoreWrapper>
        </S.Card>
      ))}
    </S.Grid>
  );
}
