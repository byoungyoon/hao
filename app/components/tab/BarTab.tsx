'use client';

import BarTabItem, { BarTabItemTypes } from '@/app/components/tab/BarTabItem';
import { useEffect, useState } from 'react';
import * as styles from './barTab.css';

type Props = {
  /**
   * tab item data
   */
  data: BarTabItemTypes[];
  /**
   * default select
   */
  defaultSelect: string;
  /**
   * on change action => key(item.text)
   * @param text
   */
  onTrackable?: (text: string) => void;
};

/**
 * tab bar
 */
export default function BarTab({ data, defaultSelect, onTrackable }: Props) {
  const [select, setSelect] = useState(defaultSelect);

  const onClickItem = (text: string) => () => {
    setSelect(text);
  };

  useEffect(() => {
    if (onTrackable) onTrackable(select);
  }, [select]);

  return (
    <div className={styles.itemGroup}>
      {data.map((datum) => (
        <BarTabItem
          key={datum.text}
          onClick={onClickItem(datum.text)}
          isSelect={select === datum.text}
          {...datum}
        />
      ))}
    </div>
  );
}
