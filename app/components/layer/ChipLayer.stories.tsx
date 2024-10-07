import type { Meta, StoryObj } from '@storybook/react';
import { themeClass } from '@/app/theme.css';
import ChipLayer from '@/app/components/layer/ChipLayer';

const meta = {
  title: 'Layer/chip',
  component: ChipLayer,
  tags: ['autodocs'],
} satisfies Meta<typeof ChipLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    text: '전체',
    color: 'gray',
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 425 }}>
        <ChipLayer {...props} />
      </div>
    );
  },
};
