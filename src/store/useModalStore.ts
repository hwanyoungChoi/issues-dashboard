import { ReactNode } from "react";
import { create } from "zustand";

export interface ModalProps {
  close?: (payload?: any) => void;
}

export interface ModalState {
  key: string;
  modal: (props: ModalProps) => ReactNode;
  props: ModalProps;
}

export interface ModalStore {
  modalStates: ModalState[];
  openModal: (modalStates: ModalState[]) => void;
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
