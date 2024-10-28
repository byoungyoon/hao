import { create } from 'zustand';

type State = {
  x: number;
  y: number;
  update: number;
};

type Action = {
  viewHeart: (x: number, y: number) => void;
};

export const useHeart = create<State & Action>((set) => ({
  x: 0,
  y: 0,
  update: 0,

  viewHeart: (x, y) => set(({ update }) => ({ x, y, update: update + 1 })),
}));
