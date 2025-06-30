import { useEffect } from "react";

import { useModalStore } from "@/store/useModalStore";

import * as S from "./ModalContainer.styled";

export default function ModalContainer() {
  const modalStates = useModalStore((state) => state.modalStates);

  const hasModal = !!modalStates.length;

  useEffect(() => {
    if (hasModal) {
      window.document.body.style.overflow = "hidden";
    }

    return () => {
      window.document.body.style.overflow = "";
    };
  }, [hasModal]);

  if (!hasModal) {
    return null;
  }

  return (
    <S.Container>
      {modalStates.map((modalState, index) => (
        <S.Modal key={index}>{modalState.modal(modalState.props)}</S.Modal>
      ))}
    </S.Container>
  );
}
