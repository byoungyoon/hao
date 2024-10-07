import type { Meta, StoryObj } from '@storybook/react';
import { themeClass } from '@/app/theme.css';
import InfoLayer from '@/app/components/layer/InfoLayer';

const meta = {
  title: 'Layer/Info',
  component: InfoLayer,
  tags: ['autodocs'],
} satisfies Meta<typeof InfoLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    text: '채택완료',
    color: 'gray',
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 425 }}>
        <InfoLayer {...props} />
      </div>
    );
  },
};
