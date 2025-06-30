import * as S from "./BaseButton.styled";
import { Props } from "./types";

export default function BaseButton({ children, ...props }: Props) {
  return <S.Base {...props}>{children}</S.Base>;
}
