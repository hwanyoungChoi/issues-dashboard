import styled from "@emotion/styled";

import { Z_INDEX } from "@/lib/constants/styles";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: ${Z_INDEX.LOADING};
`;
