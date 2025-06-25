import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.nav`
  border: 1px solid black;
  width: 200px;
  padding: 20px;

  > ul {
    > li + li {
      margin-top: 10px;
    }
  }
`;

export const CustomLink = styled(Link)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      border-radius: 8px;
      background-color: #888;
    `}

  display: block;
  box-sizing: border-box;
  width: 100%;
  color: black;
  font-size: 20px;
  padding: 10px;
`;
