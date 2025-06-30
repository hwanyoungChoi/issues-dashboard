import * as S from "./Button.styled";
import { Props } from "./types";

export default function Button({ children, ...props }: Props) {
  return (
    <S.Base {...props}>
      {children}

      {props.disabled && <S.DisabledLayer />}
    </S.Base>
  );
}
