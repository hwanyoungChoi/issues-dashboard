import Image from "next/image";

import DropDown from "@/components/common/DropDown";
import { TContentViewType, useAppStore } from "@/store/useAppStore";

import * as S from "./GlobalNavBar.styled";

export default function GlobalNavBar() {
  const contentViewType = useAppStore((state) => state.contentViewType);
  const setContentViewType = useAppStore((state) => state.setContentViewType);

  return (
    <S.Container>
      <h1>Dashboard</h1>

      <S.MenuContainer>
        <DropDown
          buttonLabel={
            <Image
              src="/assets/icons/ic_setting.png"
              alt="콘텐츠 보기 옵션"
              width={24}
              height={24}
            />
          }
          items={[
            { label: "리스트 보기", value: "list" },
            { label: "카드 보기", value: "card" },
          ]}
          selectedValue={contentViewType}
          onClick={(value) => setContentViewType(value as TContentViewType)}
        />
      </S.MenuContainer>
    </S.Container>
  );
}
