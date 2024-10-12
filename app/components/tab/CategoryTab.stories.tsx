import type { Meta, StoryObj } from '@storybook/react';
import { themeClass } from '@/app/theme.css';
import CategoryTab from '@/app/components/tab/CategoryTab';

const meta = {
  title: 'Tab/Category',
  component: CategoryTab,
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryTab>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    text: '전체',
    value: 0,
  },
  {
    text: '10대',
    value: 10,
  },
  {
    text: '20대',
    value: 20,
  },
  {
    text: '30대',
    value: 30,
  },
];

const data2 = [
  {
    text: '채택완료',
    value: 0,
  },
  {
    text: '미채택',
    value: 1,
  },
];

export const Two: Story = {
  args: {
    data: data2,
    defaultSelect: 0,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 375 }}>
        <CategoryTab {...props} />
      </div>
    );
  },
};

export const Four: Story = {
  args: {
    data: data,
    defaultSelect: 0,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 375 }}>
        <CategoryTab {...props} />
      </div>
    );
  },
};
