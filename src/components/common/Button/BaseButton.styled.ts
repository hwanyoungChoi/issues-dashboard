import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonProps } from "./types";

export const Base = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0;
  font-size: 16px;
  font-weight: 700;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;
