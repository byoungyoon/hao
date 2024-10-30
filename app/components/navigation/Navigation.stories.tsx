import type { Meta, StoryObj } from '@storybook/react';
import { themeClass } from '@/app/theme.css';
import Navigation from '@/app/components/navigation/Navigation';
import Image from 'next/image';
import Arrow from '@/app/icon/arrow-left.svg';
import Alarm from '@/app/icon/alarm.png';
import AlarmOn from '@/app/icon/alarm-on.png';
import Logo1 from '@/app/icon/logo/logo-1.png';
import Logo2 from '@/app/icon/logo/logo-2.png';
import Body from '@/app/components/text/Body';

const meta = {
  title: 'Navigation',
  component: Navigation,
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Type1: Story = {
  args: {
    left: <Image src={Arrow} alt='arrow' width={24} height={24} />,
    text: '텍스트',
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 420 }}>
        <Navigation {...props} />
      </div>
    );
  },
};

export const Type2: Story = {
  args: {
    left: <Image src={Arrow} alt='arrow' width={24} height={24} />,
    right: <Image src={Alarm} alt='alarm' width={24} height={24} />,
    text: '텍스트',
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 420 }}>
        <Navigation {...props} />
      </div>
    );
  },
};

export const Type3: Story = {
  args: {
    left: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Image src={Logo1} alt='logo' />
        <Image src={Logo2} alt='logo' />
      </div>
    ),
    right: <Image src={AlarmOn} alt='alarm' width={24} height={24} />,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 420 }}>
        <Navigation {...props} />
      </div>
    );
  },
};

export const Type4: Story = {
  args: {
    text: '텍스트',
    right: <Image src={Alarm} alt='alarm' width={24} height={24} />,
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 420 }}>
        <Navigation {...props} />
      </div>
    );
  },
};

export const Type5: Story = {
  args: {
    left: <Image src={Arrow} alt='arrow' width={24} height={24} />,
    text: '텍스트',
    right: (
      <Body size='1' style={{ color: '#333', cursor: 'pointer' }}>
        확인
      </Body>
    ),
  },
  render: (props) => {
    return (
      <div className={themeClass} style={{ width: 420 }}>
        <Navigation {...props} />
      </div>
    );
  },
};
