import { useAppStore } from "@/store/useAppStore";

import * as S from "./GlobalNavBar.styled";

export default function GlobalNavBar() {
  const contentViewType = useAppStore((state) => state.contentViewType);
  const setContentViewType = useAppStore((state) => state.setContentViewType);

  return (
    <S.Container>
      <h1>Dashboard</h1>

      <S.MenuContainer>
        {/* TODO: popover 형태로 개발 */}
        <label>
          리스트 보기
          <input
            type="radio"
            name="contentViewType"
            value="list"
            checked={contentViewType === "list"}
            onChange={() => setContentViewType("list")}
          />
        </label>
        <label>
          카드 보기
          <input
            type="radio"
            name="contentViewType"
            value="card"
            checked={contentViewType === "card"}
            onChange={() => setContentViewType("card")}
          />
        </label>
      </S.MenuContainer>
    </S.Container>
  );
}
