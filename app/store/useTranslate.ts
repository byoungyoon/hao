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
  isAdopted: boolean;
};

type FeedAction = {
  updateAge: (age: FeedState['age']) => void;
  updateCategory: (category: FeedState['category']) => void;
  updateSort: (sort: FeedState['sort']) => void;
  updateIsAdopted: (isAdopted: FeedState['isAdopted']) => void;
};

export const useFeedForm = create<FeedState & FeedAction>((set) => ({
  age: 0,
  category: '전체',
  sort: '',
  isAdopted: true,

  updateAge: (age) => set(() => ({ age: age })),
  updateCategory: (category) => set(() => ({ category: category })),
  updateSort: (sort) => set(() => ({ sort: sort })),
  updateIsAdopted: (isAdopted) => set(() => ({ isAdopted: isAdopted })),
}));

type WritingState = {
  category: string;
  title: string;
  body: string;
  images: string[];
  type: '후시딘' | '후추';
};

type WritingAction = {
  updateCategory: (y: WritingState['category']) => void;
  updateTitle: (title: WritingState['title']) => void;
  updateBody: (body: WritingState['body']) => void;
  updateImages: (images: WritingState['images']) => void;
  updateType: (type: WritingState['type']) => void;

  reset: () => void;
  check: () => boolean;
};

export const useWritingForm = create<WritingState & WritingAction>(
  (set, get) => ({
    category: '',
    title: '',
    body: '',
    images: [],
    type: '후시딘',

    updateCategory: (category) => set(() => ({ category: category })),
    updateTitle: (title) => set(() => ({ title: title })),
    updateBody: (body) => set(() => ({ body: body })),
    updateImages: (images) => set(() => ({ images: images })),
    updateType: (type) => set(() => ({ type: type })),
    reset: () =>
      set(() => ({
        category: '',
        title: '',
        body: '',
        images: [],
        type: '후시딘',
      })),
    check: () => {
      const { category, title, body, images } = get();

      return !(
        category.length !== 0 ||
        title.length !== 0 ||
        body.length !== 0 ||
        images.length !== 0
      );
    },
  }),
);

type Top5State = {
  age: number;
};

type Top5Action = {
  updateAge: (age: Top5State['age']) => void;
};

export const useTop5From = create<Top5State & Top5Action>((set) => ({
  age: 0,

  updateAge: (age) => set(() => ({ age: age })),
}));
