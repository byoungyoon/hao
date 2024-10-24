'use client';

import { useAgeForm, usePointForm } from '@/app/store/useTranslate';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPoint } from '@/app/(afterLogin)/point/_lib/getPoint';
import cx from 'classnames';
import PointCard from '@/app/components/card/PointCard';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';

import * as styles from './customPointCardGroup.css';

export default function CustomPointCardGroup() {
  const { localData: userData } = useUser();

  const age = useAgeForm((state) => state.age);
  const updatePoint = usePointForm((state) => state.updatePoint);

  const localAge = useMemo(
    () => (age === 0 ? userData.age : age),
    [userData, age],
  );

  const [point, setPoint] = useState(userData.characterId);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { data } = useQuery({
    queryKey: ['point'],
    queryFn: getPoint,
  });

  const selectAge = useMemo(() => {
    if (localAge === 10) return [1, 2, 3];
    if (localAge === 20) return [4, 5, 6];
    if (localAge === 30) return [7, 8, 9];

    return [];
  }, [localAge]);

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
    setPoint(point);
    updatePoint(point);
  };

  useEffect(() => {
    if (localData.length === 0 || !scrollRef.current) return;

    const element = scrollRef.current!;
    element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
  }, [localData, scrollRef]);

  return (
    <div ref={scrollRef} className={styles.group}>
      {localData.map((datum) => (
        <PointCard
          key={datum.id}
          image={datum.image}
          className={cx(
            styles.age[`age${localAge}`],
            point === datum.id && 'select',
          )}
          onClick={onClickItem(datum.id)}
        />
      ))}
    </div>
  );
}
