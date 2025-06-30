import { useEffect } from "react";

import { useModalStore } from "@/store/useModalStore";

import * as S from "./ModalContainer.styled";

export default function ModalContainer() {
  const modals = useModalStore((state) => state.modals);

  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "";
    };
  }, []);

  if (!modals.length) {
    return null;
  }

  return (
    <S.Container>
      {modals.map((modal, index) => (
        <S.Modal key={index}>{modal.modal(modal.props)}</S.Modal>
      ))}
    </S.Container>
  );
}
