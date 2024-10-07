import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Body from '@/app/components/text/Body';
import * as styles from './barTabItem.css';
import cx from 'classnames';

export type BarTabItemTypes = {
  text: string;
  icon: {
    on: StaticImageData;
    off: StaticImageData;
  };

  isSelect?: boolean;
};

type Props = BarTabItemTypes & { onClick?: () => void };

export default function BarTabItem({ text, icon, isSelect, onClick }: Props) {
  return (
    <div role='button' tabIndex={0} className={styles.item} onClick={onClick}>
      <Image
        src={isSelect ? icon.on : icon.off}
        alt='barTabItem'
        width={24}
        height={24}
      />
      <Body size='6' className={cx(styles.text, isSelect && 'select')}>
        {text}
      </Body>
    </div>
  );
}
