'use client';

import CategoryTabItem, {
  CategoryTabItemTypes,
} from '@/app/components/tab/CategoryTabItem';
import { useEffect, useState } from 'react';
import * as styles from './cartegoryTab.css';

type Props = {
  /**
   * tab category item data
   */
  data: CategoryTabItemTypes[];
  /**
   * default select
   */
  defaultSelect: number;
  /**
   * on change action => key(item.text)
   * @param text
   */
  onTrackable?: (value: number) => void;
};

/**
 * tab category
 */
export default function CategoryTab({
  data,
  defaultSelect,
  onTrackable,
}: Props) {
  const [select, setSelect] = useState(defaultSelect);

  const onClickItem = (value: number) => () => {
    setSelect(value);
  };

  useEffect(() => {
    if (onTrackable) onTrackable(select);
  }, [select]);

  return (
    <div className={styles.itemGroup}>
      {data.map((datum) => (
        <CategoryTabItem
          key={datum.text}
          onClick={onClickItem(datum.value)}
          isSelect={select === datum.value}
          {...datum}
        />
      ))}
    </div>
  );
}
