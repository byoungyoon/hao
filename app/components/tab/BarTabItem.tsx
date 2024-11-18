'use client';

import Body from '@/app/components/text/Body';
import cx from 'classnames';
import { ReactNode } from 'react';

import * as styles from './barTabItem.css';

export type BarTabItemTypes = {
  target: string;
  text: string;
  icon: {
    on: ReactNode;
    off: ReactNode;
  };

  isSelect?: boolean;
};

type Props = BarTabItemTypes & { onClick?: () => void };

export default function BarTabItem({ text, icon, isSelect, onClick }: Props) {
  return (
    <div role='button' tabIndex={0} className={styles.item} onClick={onClick}>
      {isSelect ? icon.on : icon.off}
      {/*<Image*/}
      {/*  src={isSelect ? icon.on : icon.off}*/}
      {/*  alt='barTabItem'*/}
      {/*  width={24}*/}
      {/*  height={24}*/}
      {/*/>*/}
      <Body size='6' className={cx(styles.text, isSelect && 'select')}>
        {text}
      </Body>
    </div>
  );
}
