import type { Meta, StoryObj } from '@storybook/react';
import BarTab from '@/app/components/tab/BarTab';
import { themeClass } from '@/app/theme.css';
import Button from '@/app/components/button/Button';

const meta = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    size: 'small',
    color: 'gray',
    text: 'TEXT',
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 420 }}>
        <Button {...props} />
      </div>
    );
  },
};
