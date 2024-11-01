import { create } from 'zustand';

type State = {
  open: boolean;
  text: string;
};

type Action = {
  updateToast: (text: State['text']) => void;
  closeToast: () => void;
};

export const useToast = create<State & Action>((set) => ({
  open: false,
  text: '',

  updateToast: (text) => set(() => ({ open: true, text: text })),
  closeToast: () => set(() => ({ open: false })),
}));
