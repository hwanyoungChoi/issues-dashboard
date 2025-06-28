import { css } from "@emotion/react";
import styled from "@emotion/styled";

import COLORS from "@/lib/constants/colors";
import { Z_INDEX } from "@/lib/constants/styles";

import { BaseButton } from "../Button";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(BaseButton)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  ${({ isActive }) =>
    isActive &&
    css`
      border-radius: 8px;
      background-color: ${COLORS.R10};
    `}
`;

export const MenuContainer = styled.div<{ direction: "left" | "right" }>`
  position: absolute;
  width: auto;
  display: inline-block;
  min-width: 120px;
  top: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  z-index: ${Z_INDEX.DROPDOWN};

  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0")}
`;

export const MenuList = styled.ul`
  > li {
    cursor: pointer;
  }

  > li + li {
    margin-top: 10px;
  }
`;
