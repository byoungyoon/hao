'use client';

import { useAgeForm, usePointForm } from '@/app/store/useTranslate';
import { useMemo, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPoint } from '@/app/(afterLogin)/point/_lib/getPoint';
import cx from 'classnames';
import PointCard from '@/app/components/card/PointCard';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useResizeObserver } from '@/app/util/useResizeObserver';

import * as styles from './customPointCardGroup.css';

export default function CustomPointCardGroup() {
  const { localData: userData } = useUser();

  const age = useAgeForm((state) => state.age);
  const updatePoint = usePointForm((state) => state.updatePoint);

  const sliderRef = useRef<Slider>(null);
  const localAge = useMemo(
    () => (age === 0 ? userData.age : age),
    [userData, age],
  );

  const [point, setPoint] = useState(userData.characterId);

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

  const targetIndex = useMemo(() => {
    return selectAge.indexOf(userData.characterId);
  }, [selectAge, userData]);

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
    const newIndex = selectAge.indexOf(point);
    if (newIndex === -1) return;

    sliderRef.current?.slickGoTo(newIndex);

    setTimeout(() => {
      setPoint(point);
      updatePoint(point);
    }, 350);
  };

  const onAfterChange = (current: number) => {
    updatePoint(selectAge[current]);
    setPoint(selectAge[current]);
  };

  const { width, ref } = useResizeObserver();
  const centerPadding = useMemo(() => {
    if (width <= 320) return `15px`;
    if (width <= 375) return `30px`;

    return '50px';
  }, [width]);

  const settings = useMemo(() => {
    return {
      className: 'center',
      centerMode: true,
      focusOnSelect: true,
      infinite: false,
      slidesToShow: 1,
      speed: 500,
      arrows: false,
    };
  }, []);

  return (
    <div ref={ref} className={styles.group}>
      <Slider
        {...settings}
        centerPadding={centerPadding}
        afterChange={onAfterChange}
        initialSlide={targetIndex}
        ref={sliderRef}
      >
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
      </Slider>
    </div>
  );
}
