import Arrow from '@/app/icon/arrow-right.svg';
import Image from 'next/image';
import { ReactNode } from 'react';
import Body from '@/app/components/text/Body';

import * as styles from './customItem.css';

type Props = {
  color: string;
  icon: ReactNode;
  title: string;
  count: number;

  onClick?: () => void;
};

export default function CustomItem({
  color,
  icon,
  title,
  count,
  onClick,
}: Props) {
  return (
    <div role='button' tabIndex={0} className={styles.item} onClick={onClick}>
      <div className={styles.itemTopLayer} style={{ background: color }} />
      <div className={styles.itemLayer} style={{ background: color }}>
        <div className={styles.dataLayer}>
          <div className={styles.imageLayer}>{icon}</div>
          <div className={styles.textLayer}>
            <Body size='1'>{title}</Body>
            <Body size='5' className={styles.countText}>
              {count}개
            </Body>
          </div>
        </div>
        <div className={styles.arrowLayer}>
          <Image src={Arrow.src} alt='arrow' width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
