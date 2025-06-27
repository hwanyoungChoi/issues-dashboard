import dayjs from "dayjs";
import Link from "next/link";

import { DATE_FORMAT } from "@/lib/constants/date";
import { PATHS } from "@/lib/constants/routes";

import * as S from "./CardTypeList.styled";
import ListMoreDropDown, { MoreAction } from "../ListMoreDropDown";

interface Props {
  issues: any[];
  onDropDownClick: (issueNumber: number, action: MoreAction) => void;
}

export default function CardTypeList({ issues, onDropDownClick }: Props) {
  return (
    <S.Grid>
      {issues.map((issue) => (
        <S.Card key={issue.id}>
          <S.CardTitle>
            <Link href={`${PATHS.ISSUES}/${issue.number}`}>{issue.title}</Link>
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
            />
          </S.CardMoreWrapper>
        </S.Card>
      ))}
    </S.Grid>
  );
}
