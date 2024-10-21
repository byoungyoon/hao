'use client';

import ChipLayer from '@/app/components/layer/ChipLayer';
import { useEffect, useMemo, useState } from 'react';
import { useFeedForm } from '@/app/store/useTranslate';
import { useCategory } from '@/app/(beforeLogin)/_state/useCategory';

import * as styles from './customChipGroup.css';

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

  useEffect(() => {
    return () => updateCategory('');
  }, [updateCategory]);

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
