'use client';

import ChipLayer from '@/app/components/layer/ChipLayer';
import { useEffect, useState } from 'react';
import * as styles from './customChipGroup.css';

type Props = {
  data: string[];
  defaultSelect: string;

  onTrackable?: (text: string) => void;
};
export default function CustomChipGroup({
  data,
  defaultSelect,
  onTrackable,
}: Props) {
  const [select, setSelect] = useState(defaultSelect);

  const onClickLayer = (text: string) => () => {
    setSelect(text);
  };

  useEffect(() => {
    if (onTrackable) onTrackable(select);
  }, [select]);

  return (
    <div className={styles.chipGroup}>
      {data.map((datum) => (
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
