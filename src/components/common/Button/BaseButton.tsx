import { forwardRef } from "react";

import * as S from "./BaseButton.styled";
import { Props } from "./types";

const BaseButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <S.Base ref={ref} {...props}>
        {children}
      </S.Base>
    );
  }
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
