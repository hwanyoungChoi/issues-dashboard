import { useEffect } from "react";

import { useModalStore } from "@/store/useModalStore";

import * as S from "./ModalContainer.styled";

export default function ModalContainer() {
  const modalStates = useModalStore((state) => state.modalStates);

  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "";
    };
  }, []);

  if (!modalStates.length) {
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
