import styled from "@emotion/styled";
import Link from "next/link";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 1;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  max-width: 90%;
`;

export const Title = styled(Link)<{ state: "open" | "closed" }>`
  text-decoration: ${({ state }) =>
    state === "open" ? "none" : "line-through"};
`;

export const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;

export const CardMoreWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
