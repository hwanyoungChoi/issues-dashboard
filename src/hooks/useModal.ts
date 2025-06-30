import { ModalState, useModalStore } from "@/store/useModalStore";

export default function useModal({ key, modal, props }: ModalState<any>) {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const closeAllModal = useModalStore((state) => state.closeAllModal);
  const modalStates = useModalStore((state) => state.modalStates);

  const isOpen = modalStates.some((modalState) => modalState.key === key);

  return {
    isOpen,
    openModal: () => openModal([{ key, modal, props }]),
    closeModal,
    closeAllModal,
  };
}
