import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
`;
