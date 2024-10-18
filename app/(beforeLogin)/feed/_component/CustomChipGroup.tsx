'use client';

import ChipLayer from '@/app/components/layer/ChipLayer';
import { useMemo, useState } from 'react';
import { useFeedForm } from '@/app/store/useTranslate';

import * as styles from './customChipGroup.css';
import { useCategory } from '@/app/(beforeLogin)/_state/useCategory';

export default function CustomChipGroup() {
  const updateCategory = useFeedForm((state) => state.updateCategory);

  const [select, setSelect] = useState('전체');

  const { localData: categoryData } = useCategory();

  const chipData = useMemo(() => {
    const data = categoryData.map((datum) => datum.name);

    return ['전체', ...data];
  }, [categoryData]);

  const onClickLayer = (text: string) => () => {
    setSelect(text);
    updateCategory(text);
  };

  return (
    <div className={styles.chipGroup}>
      {chipData.map((datum) => (
        <ChipLayer
          key={datum}
          text={datum}
          color={select === datum ? 'orange' : 'gray'}
          onClick={onClickLayer(datum)}
        />
      ))}
    </div>
  );
}
