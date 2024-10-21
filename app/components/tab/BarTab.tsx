'use client';

import BarTabItem, { BarTabItemTypes } from '@/app/components/tab/BarTabItem';
import { usePathname } from 'next/navigation';

import * as styles from './barTab.css';

type Props = {
  /**
   * tab item data
   */
  data: BarTabItemTypes[];
  /**
   * on change action => key(item.text)
   * @param text
   */
  onTrackable?: (text: string) => void;
};

/**
 * tab bar
 */
export default function BarTab({ data, onTrackable }: Props) {
  const pathname = usePathname();

  const onClickItem = (text: string) => () => {
    if (onTrackable) onTrackable(text);
  };

  return (
    <div className={styles.itemGroup}>
      {data.map((datum) => (
        <BarTabItem
          key={datum.text}
          onClick={onClickItem(datum.text)}
          isSelect={pathname.startsWith(datum.target)}
          {...datum}
        />
      ))}
    </div>
  );
}
