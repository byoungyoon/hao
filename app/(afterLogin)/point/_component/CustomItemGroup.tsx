'use client';

import CustomItem from '@/app/(afterLogin)/point/_component/CustomItem';
import { useQuery } from '@tanstack/react-query';
import { getPoint } from '@/app/(afterLogin)/point/_lib/getPoint';
import { useEffect, useMemo, useRef } from 'react';
import { useAgeForm, usePointForm } from '@/app/store/useTranslate';
import cx from 'classnames';

import * as styles from './customItemGroup.css';

export default function CustomItemGroup() {
  const age = useAgeForm((state) => state.age);
  const { point, updatePoint } = usePointForm();

  const scrollRef = useRef<HTMLDivElement>(null);

  const { data } = useQuery({
    queryKey: ['point'],
    queryFn: getPoint,
  });

  const selectAge = useMemo(() => {
    if (age === 10) return [1, 2, 3];
    if (age === 20) return [4, 5, 6];
    if (age === 30) return [7, 8, 9];

    return [];
  }, [age]);

  const localData = useMemo(() => {
    if (!data) return [];

    return data
      .map((datum, index) => {
        return {
          id: index + 1,
          image: datum,
        };
      })
      .filter((datum) => selectAge.includes(datum.id));
  }, [data, selectAge]);

  const onClickItem = (point: number) => () => {
    updatePoint(point);
  };

  useEffect(() => {
    if (localData.length === 0 || !scrollRef.current) return;

    const element = scrollRef.current;
    element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
  }, [localData, scrollRef]);

  return (
    <div ref={scrollRef} className={styles.group}>
      {localData.map((datum) => (
        <CustomItem
          key={datum.id}
          image={datum.image}
          className={cx(
            styles.age[`age${age}`],
            point === datum.id && 'select',
          )}
          onClick={onClickItem(datum.id)}
        />
      ))}
    </div>
  );
}
