import * as S from "./IssuesEditView.styled";

interface Props {
  id?: number;
}

export default function IssuesEditView({ id }: Props) {
  return <S.Container>게시글 편집 페이지 - {id}</S.Container>;
}
