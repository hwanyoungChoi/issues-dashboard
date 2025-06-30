import { ReactNode } from "react";
import { create } from "zustand";

export interface ModalProps {
  close?: () => void;
}

export interface ModalState<BaseProps extends ModalProps> {
  key: string;
  modal: (props: BaseProps) => ReactNode;
  props: BaseProps;
}

export interface ModalStore {
  modalStates: ModalState<ModalProps>[];
  openModal: (modalStates: ModalState<ModalProps>[]) => void;
  closeModal: () => void;
  closeAllModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalStates: [],
  openModal: (modals) => {
    set((state) => ({
      modalStates: [...state.modalStates, ...modals],
    }));
  },
  closeModal: () => {
    set((state) => ({ modalStates: state.modalStates.slice(0, -1) }));
  },
  closeAllModal: () => {
    set({ modalStates: [] });
  },
}));
