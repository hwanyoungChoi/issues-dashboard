import styled from "@emotion/styled";

import { PAGE_PADDING_PX } from "@/lib/constants/styles";

export const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  min-height: 0;
`;

export const ContentContainer = styled.main`
  border: 1px solid black;
  padding: ${PAGE_PADDING_PX}px;

  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
`;
