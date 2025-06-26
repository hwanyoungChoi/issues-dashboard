import { forwardRef } from "react";

import * as S from "./Button.styled";
import { Props } from "./types";

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <S.Base ref={ref} {...props}>
        {children}

        {props.disabled && <S.DisabledLayer />}
      </S.Base>
    );
  }
);

Button.displayName = "Button";

export default Button;
