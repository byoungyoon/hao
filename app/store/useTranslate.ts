import { create } from 'zustand';

type AgeState = {
  age: number;
};

type AgeAction = {
  updateAge: (age: AgeState['age']) => void;
};

export const useAgeForm = create<AgeState & AgeAction>((set) => ({
  age: 0,
  updateAge: (age) => set(() => ({ age: age })),
}));

type PointState = {
  point: number;
  nickname: string;
};

type PointAction = {
  updatePoint: (age: PointState['point']) => void;
  updateNickname: (nickname: PointState['nickname']) => void;
};

export const usePointForm = create<PointState & PointAction>((set) => ({
  point: 0,
  nickname: '',

  updatePoint: (point) => set(() => ({ point: point })),
  updateNickname: (nickname) => set(() => ({ nickname: nickname })),
}));

type FeedState = {
  age: number;
  category: string;
  sort: string;
};

type FeedAction = {
  updateAge: (age: FeedState['age']) => void;
  updateCategory: (category: FeedState['category']) => void;
  updateSort: (sort: FeedState['sort']) => void;
};

export const useFeedForm = create<FeedState & FeedAction>((set) => ({
  age: 0,
  category: '전체',
  sort: '',

  updateAge: (age) => set(() => ({ age: age })),
  updateCategory: (category) => set(() => ({ category: category })),
  updateSort: (sort) => set(() => ({ sort: sort })),
}));
