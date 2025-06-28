import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";

import * as S from "./Input.styled";
import { Button } from "../Button";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  hasSubmitButton?: boolean;
  submitButtonLabel?: string | ReactNode;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ errorMessage, hasSubmitButton, submitButtonLabel, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <S.Container>
        <S.InputContainer isFocused={isFocused} isError={!!errorMessage}>
          <S.Input
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

          {hasSubmitButton && (
            <Button type="submit" size="small">
              {submitButtonLabel}
            </Button>
          )}
        </S.InputContainer>

        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.Container>
    );
  }
);

Input.displayName = "Input";

export default Input;
