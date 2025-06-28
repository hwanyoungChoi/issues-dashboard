import { forwardRef, TextareaHTMLAttributes, useState } from "react";

import * as S from "./TextArea.styled";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ errorMessage, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <S.Container>
        <S.TextAreaContainer isFocused={isFocused} isError={!!errorMessage}>
          <S.TextArea
            ref={ref}
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
);

TextArea.displayName = "TextArea";

export default TextArea;
