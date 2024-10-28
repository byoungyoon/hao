import { Fragment, ReactNode } from 'react';
import { create } from 'zustand';

type State = {
  open: boolean;
  children: ReactNode;
};

type Action = {
  openModal: (children: State['children']) => void;
  closeModal: () => void;
};

export const useModal = create<State & Action>((set) => ({
  open: false,
  children: <Fragment />,

  openModal: (children) => set(() => ({ open: true, children })),
  closeModal: () => set(() => ({ open: false, children: <Fragment /> })),
}));
