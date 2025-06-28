import * as S from "./Loading.styled";

interface Props {
  message?: string;
}

export default function Loading({ message }: Props) {
  return <S.Loading>{message ?? "Loading..."}</S.Loading>;
}
