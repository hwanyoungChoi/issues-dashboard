import Image from "next/image";

import DropDown from "@/components/common/DropDown";

export const enum MoreAction {
  Update,
  Delete,
}

interface Props {
  onClick: (action: MoreAction) => void;
}

export default function ListMoreDropDown({ onClick }: Props) {
  return (
    <DropDown
      buttonLabel={
        <Image
          src="/assets/icons/ic_more.png"
          alt="더보기"
          width={24}
          height={24}
        />
      }
      items={[
        { label: "수정", value: MoreAction.Update },
        { label: "삭제", value: MoreAction.Delete },
      ]}
      onClick={(action) => {
        if (action === MoreAction.Delete) {
          // TODO: modal 컴포넌트
          if (!window.confirm("게시글을 삭제하시겠습니까?")) {
            return;
          }
        }

        onClick(action);
      }}
    />
  );
}
