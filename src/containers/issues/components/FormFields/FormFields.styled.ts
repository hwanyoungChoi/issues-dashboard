import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 20px;

  > * + * {
    margin-top: 20px;
  }
`;
