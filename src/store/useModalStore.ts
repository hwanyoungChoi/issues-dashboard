import { ReactNode } from "react";
import { create } from "zustand";

export interface ModalProps {
  close?: (payload?: any) => void;
}

export interface Modal {
  key: string;
  modal: (props: ModalProps) => ReactNode;
  props: ModalProps;
}

export interface ModalStore {
  modals: Modal[];
  openModal: (modals: Modal[]) => void;
  closeModal: () => void;
  closeAllModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],
  openModal: (modals) => {
    set((state) => ({
      modals: [...state.modals, ...modals],
    }));
  },
  closeModal: () => {
    set((state) => ({ modals: state.modals.slice(0, -1) }));
  },
  closeAllModal: () => {
    set({ modals: [] });
  },
}));
