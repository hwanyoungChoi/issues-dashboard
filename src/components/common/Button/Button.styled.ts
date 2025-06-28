import { css } from "@emotion/react";
import styled from "@emotion/styled";

import COLORS from "@/lib/constants/colors";
import { Z_INDEX } from "@/lib/constants/styles";

import BaseButton from "./BaseButton";

export const Base = styled(BaseButton)`
  position: relative;
  border-radius: 8px;
  padding: 8px 12px;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          font-weight: 700;
        `;
      // Medium
      default:
        return css`
          font-size: 16px;
          font-weight: 700;
        `;
    }
  }}

  ${({ theme }) => {
    switch (theme) {
      case "primary":
        return css`
          background-color: ${COLORS.Y10};
          color: ${COLORS.N10};
        `;
      // Default
      default:
        return css`
          background-color: ${COLORS.N20};
          color: ${COLORS.B10};
        `;
    }
  }}
`;

export const DisabledLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.68);
  z-index: ${Z_INDEX.PRIORITY};
`;
