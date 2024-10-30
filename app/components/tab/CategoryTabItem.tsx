'use client';

import Body from '@/app/components/text/Body';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import * as styles from './categoryTabItem.css';

export type CategoryTabItemTypes = {
  text: string;
  value: number;
  isSelect?: boolean;
};

type Props = CategoryTabItemTypes & { onClick?: () => void };

export default function CategoryTabItem({ text, isSelect, onClick }: Props) {
  const pathname = usePathname();

  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(styles.item, isSelect && 'select')}
      onClick={onClick}
    >
      <Body size='4' className={cx(styles.text, isSelect && 'select')}>
        {text}
      </Body>
      {isSelect && (
        <motion.div
          className={cx(styles.border, isSelect && 'select')}
          layoutId={`catrgory${pathname}`}
        />
      )}
    </div>
  );
}
