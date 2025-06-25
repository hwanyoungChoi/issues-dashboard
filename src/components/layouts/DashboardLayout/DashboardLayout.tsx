import { PropsWithChildren } from "react";

import * as S from "./DashboardLayout.styled";
import GlobalNavBar from "../GlobalNavBar";
import LeftNavBar from "../LeftNavBar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <GlobalNavBar />

      <S.InnerContainer>
        <LeftNavBar />
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
