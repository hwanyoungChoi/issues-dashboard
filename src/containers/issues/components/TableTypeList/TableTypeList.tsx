import dayjs from "dayjs";

import { DATE_FORMAT } from "@/lib/constants/date";
import { PATHS } from "@/lib/constants/routes";
import { TIssue } from "@/types/issue";

import * as S from "./TableTypeList.styled";
import ListMoreDropDown, { MoreAction } from "../ListMoreDropDown";

interface Props {
  issues: TIssue[];
  onDropDownClick: (issueNumber: number, action: MoreAction) => void;
}

export default function TableTypeList({ issues, onDropDownClick }: Props) {
  return (
    <S.Table>
      <colgroup>
        <col width="70px" />
        <col />
        <col width="170px" />
        <col width="200px" />
        <col width="50px" />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>타이틀</th>
          <th>작성자</th>
          <th>등록일시</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {issues.map((issue: TIssue) => (
          <tr key={issue.id}>
            <td>{issue.number}</td>
            <td>
              <S.Title
                href={
                  issue.state === "open"
                    ? `${PATHS.ISSUES}/${issue.number}`
                    : ""
                }
                state={issue.state}
              >
                {issue.title}
              </S.Title>
            </td>
            <td>{issue.user?.login}</td>
            <td>
              {dayjs(issue.created_at).format(DATE_FORMAT.YYYYMMDD_HHmmss)}
            </td>
            <td>
              <ListMoreDropDown
                onClick={(action) => onDropDownClick(issue.number, action)}
                disabled={issue.state !== "open"}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
