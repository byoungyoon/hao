import { create } from 'zustand';

type State = {
  vote: Record<number, boolean>;
};

type Action = {
  updateVote: (id: number, state: boolean) => void;
};

export const useClient = create<State & Action>((set, get) => ({
  vote: {},

  updateVote: (id, state) => {
    const { vote } = get();

    vote[id] = state;
    set(() => ({ vote: vote }));
  },
}));
