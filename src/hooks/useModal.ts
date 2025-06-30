import { Modal, useModalStore } from "@/store/useModalStore";

export default function useModal({ key, modal, props }: Modal) {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const closeAllModal = useModalStore((state) => state.closeAllModal);
  const modals = useModalStore((state) => state.modals);

  const isOpen = modals.some((modal) => modal.key === key);

  return {
    isOpen,
    openModal: () => openModal([{ key, modal, props }]),
    closeModal,
    closeAllModal,
  };
}
