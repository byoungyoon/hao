import type { Meta, StoryObj } from '@storybook/react';
import BarTab from '@/app/components/tab/BarTab';
import HomeOn from '@/app/icon/home/on.png';
import HomeOff from '@/app/icon/home/off.png';
import FeedOn from '@/app/icon/feed/on.png';
import FeedOff from '@/app/icon/feed/off.png';
import MyPageOn from '@/app/icon/mypage/on.png';
import MyPageOff from '@/app/icon/mypage/off.png';
import WritingOn from '@/app/icon/writing/on.png';
import WritingOff from '@/app/icon/writing/off.png';
import { themeClass } from '@/app/theme.css';

const meta = {
  title: 'Tab/Bar',
  component: BarTab,
  tags: ['autodocs'],
} satisfies Meta<typeof BarTab>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    text: '홈',
    icon: {
      on: HomeOn,
      off: HomeOff,
    },
    target: '',
  },
  {
    text: '피드',
    icon: {
      on: FeedOn,
      off: FeedOff,
    },
    target: '',
  },
  {
    text: '글 작성',
    icon: {
      on: MyPageOn,
      off: MyPageOff,
    },
    target: '',
  },
  {
    text: '마이페이지',
    icon: {
      on: WritingOn,
      off: WritingOff,
    },
    target: '',
  },
];

export const Mini: Story = {
  args: {
    data: data,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 320 }}>
        <BarTab {...props} />
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    data: data,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 375 }}>
        <BarTab {...props} />
      </div>
    );
  },
};

export const Big: Story = {
  args: {
    data: data,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 420 }}>
        <BarTab {...props} />
      </div>
    );
  },
};

export const Tablet: Story = {
  args: {
    data: data,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 768 }}>
        <BarTab {...props} />
      </div>
    );
  },
};
