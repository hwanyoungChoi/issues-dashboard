import Image from "next/image";

import DropDown from "@/components/common/DropDown";
import ConfirmModal from "@/components/modals/ConfirmModal";
import useModal from "@/hooks/useModal";

export const enum MoreAction {
  Update,
  Delete,
}

interface Props {
  onClick: (action: MoreAction) => void;
}

export default function ListMoreDropDown({ onClick }: Props) {
  const { openModal, closeModal } = useModal({
    key: "confirm-modal",
    modal: ConfirmModal,
    props: {
      title: "게시글 삭제",
      content: "게시글을 삭제하시겠습니까?",
      ok: () => {
        onClick(MoreAction.Delete);
        closeModal();
      },
      close: () => closeModal(),
      okButtonText: "삭제",
      cancelButtonText: "취소",
    },
  });

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
          openModal();
          return;
        }

        onClick(action);
      }}
    />
  );
}
