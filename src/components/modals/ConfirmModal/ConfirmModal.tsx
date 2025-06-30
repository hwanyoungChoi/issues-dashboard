import { ReactNode } from "react";

import { Button } from "@/components/common/Button";
import { ModalProps } from "@/store/useModalStore";

import * as S from "./ConfirmModal.styled";

interface Props extends ModalProps {
  title: string;
  content: string | ReactNode;
  ok: () => void;
  okButtonText?: string;
  cancelButtonText?: string;
}

export default function ConfirmModal({
  title,
  content,
  ok,
  close,
  okButtonText = "확인",
  cancelButtonText = "취소",
}: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
      <S.ActionContainer>
        <Button onClick={close}>{cancelButtonText}</Button>
        <Button theme="primary" onClick={ok}>
          {okButtonText}
        </Button>
      </S.ActionContainer>
    </S.Container>
  );
}
