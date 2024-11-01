'use client';

import Select from '@/app/components/select/Select';
import { useMemo } from 'react';
import { useFeedForm } from '@/app/store/useTranslate';

import * as styles from './customSelect.css';

enum FeedFilterEnum {
  '최신' = '',
  '채택된' = 'adopted',
  '댓글' = 'commentCnt',
  '좋아요' = 'vote',
}

export default function CustomSelect() {
  const { sort, updateSort } = useFeedForm();

  const selectData = useMemo(
    () =>
      Object.entries(FeedFilterEnum).map((entry) => {
        return {
          value: entry[1],
          label: `${entry[0]} 순`,
        };
      }),
    [],
  );

  const onTrackableSelect = (value: string) => {
    updateSort(value);
  };

  return (
    <Select
      defaultSelect={sort}
      data={selectData}
      className={styles.select}
      onTrackable={onTrackableSelect}
    />
  );
}
