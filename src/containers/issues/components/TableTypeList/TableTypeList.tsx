import Link from "next/link";

import { PATHS } from "@/lib/constants/routes";

import * as S from "./TableTypeList.styled";
import ListMoreDropDown, { MoreAction } from "../ListMoreDropDown";

interface Props {
  issues: any[];
  onDropDownClick: (id: number, action: MoreAction) => void;
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
        {issues.map((issue) => (
          <tr key={issue.id}>
            <td>{issue.number}</td>
            <td>
              <Link href={`${PATHS.ISSUES}/${issue.number}`}>
                {issue.title}
              </Link>
            </td>
            <td>{issue.user?.login}</td>
            <td>{issue.created_at}</td>
            <td>
              <ListMoreDropDown
                onClick={(action) => onDropDownClick(issue.number, action)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
}
