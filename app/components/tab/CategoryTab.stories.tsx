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
  },
  {
    text: '10대',
  },
  {
    text: '20대',
  },
  {
    text: '30대',
  },
];

const data2 = [
  {
    text: '채택완료',
  },
  {
    text: '미채택',
  },
];

export const Two: Story = {
  args: {
    data: data2,
    defaultSelect: '채택완료',
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
    defaultSelect: '전체',
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 375 }}>
        <CategoryTab {...props} />
      </div>
    );
  },
};
