import styled from "@emotion/styled";

import COLORS from "@/lib/constants/colors";

export const Container = styled.div``;

export const InputContainer = styled.div<{
  isFocused: boolean;
  isError: boolean;
}>`
  border: 2px solid ${COLORS.N20};

  display: flex;
  align-items: center;

  ${({ isFocused }) =>
    isFocused &&
    `
    border: 2px solid ${COLORS.B10};
  `}

  ${({ isError }) =>
    isError &&
    `
    border: 2px solid ${COLORS.R10};
  `}
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  line-height: 28px;
  border: none;
  outline: none;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: ${COLORS.R10};
`;
