import styled from "@emotion/styled";
import Link from "next/link";

import COLORS from "@/lib/constants/colors";

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;

  > thead {
    font-weight: 700;
    background-color: ${COLORS.N20};
  }

  > tbody {
    background-color: #fff;
  }

  th,
  td {
    padding: 10px 5px;
    text-align: left;
    vertical-align: middle;
    border: 1px solid black;
  }
`;

export const Title = styled(Link)<{ state: "open" | "closed" }>`
  text-decoration: ${({ state }) =>
    state === "open" ? "none" : "line-through"};
`;
