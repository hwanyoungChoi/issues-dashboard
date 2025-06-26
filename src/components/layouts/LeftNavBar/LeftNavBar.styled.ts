import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

import COLORS from "@/lib/constants/colors";

export const Container = styled.nav`
  border: 1px solid black;
  width: 200px;
  padding: 20px;
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      border-radius: 8px;
      background-color: ${COLORS.N20};
      color: ${COLORS.B10};
    `}
`;

export const CustomLink = styled(Link)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  color: black;
  font-size: 20px;
  padding: 10px;
`;
