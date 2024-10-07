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
  defaultSelect: string;
  /**
   * on change action => key(item.text)
   * @param text
   */
  onTrackable?: (text: string) => void;
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

  const onClickItem = (text: string) => () => {
    setSelect(text);
  };

  useEffect(() => {
    if (onTrackable) onTrackable(select);
  }, [select, onTrackable]);

  return (
    <div className={styles.itemGroup}>
      {data.map((datum) => (
        <CategoryTabItem
          key={datum.text}
          onClick={onClickItem(datum.text)}
          isSelect={select === datum.text}
          {...datum}
        />
      ))}
    </div>
  );
}
