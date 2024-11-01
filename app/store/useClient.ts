import { create } from 'zustand';

type State = {
  vote: Record<
    number,
    {
      state: boolean;
      trueCount: number;
      falseCount: number;
    }
  >;
  scrap: Record<
    number,
    {
      state: boolean;
    }
  >;
};

type Action = {
  updateVote: (
    id: number,
    state: boolean,
    trueCount: number,
    falseCount: number,
  ) => void;

  updateScrap: (id: number, state: boolean) => void;
};

export const useClient = create<State & Action>((set) => ({
  vote: {},
  scrap: {},

  updateVote: (id, state, trueCount, falseCount) => {
    set(({ vote }) => ({
      vote: {
        ...vote,
        [id]: {
          state: state,
          trueCount: trueCount,
          falseCount: falseCount,
        },
      },
    }));
  },

  updateScrap: (id, state) =>
    set(({ scrap }) => ({
      scrap: { ...scrap, [id]: { state: state } },
    })),
}));
