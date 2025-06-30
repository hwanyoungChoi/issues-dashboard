import { TextareaHTMLAttributes, useState } from "react";
import { RefCallBack } from "react-hook-form";

import * as S from "./TextArea.styled";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
  ref?: RefCallBack;
}

export default function TextArea({ errorMessage, ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Container>
      <S.TextAreaContainer isFocused={isFocused} isError={!!errorMessage}>
        <S.TextArea
          {...props}
          onFocus={(e) => {
            setIsFocused(true);

            if (props.onFocus) {
              props.onFocus(e);
            }
          }}
          onBlur={(e) => {
            setIsFocused(false);

            if (props.onBlur) {
              props.onBlur(e);
            }
          }}
        />
      </S.TextAreaContainer>

      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}
