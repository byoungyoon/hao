'use client';

import { useQuery } from '@tanstack/react-query';
import { getPoint } from '@/app/(afterLogin)/point/_lib/getPoint';
import { useEffect, useMemo } from 'react';
import { useAgeForm, usePointForm } from '@/app/store/useTranslate';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CustomItem from '@/app/(afterLogin)/point/_component/CustomItem';
import cx from 'classnames';

import * as styles from './customItemGroup.css';
import { useResizeObserver } from '@/app/util/useResizeObserver';

export default function CustomItemGroup() {
  const age = useAgeForm((state) => state.age);
  const { point, updatePoint } = usePointForm();

  const selectAge = useMemo(() => {
    if (age === 10) return [1, 2, 3];
    if (age === 20) return [4, 5, 6];
    if (age === 30) return [7, 8, 9];

    return [];
  }, [age]);

  const onAfterChange = (current: number) => {
    updatePoint(selectAge[current]);
  };

  const { width, ref } = useResizeObserver();
  const centerPadding = useMemo(() => {
    if (width <= 320) return `15px`;
    if (width <= 375) return `30px`;

    return '50px';
  }, [width]);

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
    centerPadding: centerPadding,
    slidesToShow: 1,
    speed: 500,
    initialSlide: 1,
    arrows: false,

    afterChange: onAfterChange,
  };

  const { data } = useQuery({
    queryKey: ['point'],
    queryFn: getPoint,
  });

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

  useEffect(() => {
    if (selectAge.length === 0) return;

    updatePoint(selectAge[1]);
  }, [selectAge]);

  return (
    <div ref={ref} className={styles.group}>
      <Slider {...settings}>
        {localData.map((datum) => (
          <CustomItem
            key={datum.id}
            image={datum.image}
            className={cx(
              styles.age[`age${age}`],
              point === datum.id && 'select',
            )}
          />
        ))}
      </Slider>
    </div>
  );
}
