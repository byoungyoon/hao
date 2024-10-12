import Body from '@/app/components/text/Body';
import { useEffect, useRef, useState } from 'react';
import Arrow from '@/app/icon/feed_filter_arrow.png';
import Image from 'next/image';

import * as styles from './select.css';
import cx from 'classnames';

export type SelectTypes = {
  value: string;
  label: string;
};

type Props = {
  data: SelectTypes[];

  onTrackable?: (value: string) => void;
  className?: string;
};

export default function Select({ data, onTrackable, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const [localDatum, setLocalDatum] = useState(
    data.length > 0
      ? data[0]
      : {
          value: '',
          label: '',
        },
  );

  const onClickToggle = () => {
    setOpen(!open);
  };

  const onClickItem = (datum: SelectTypes) => () => {
    setLocalDatum(datum);
    setOpen(false);

    if (onTrackable) onTrackable(datum.value);
  };

  const onClickOverlay = (event: MouseEvent) => {
    if (!ref.current) return;

    if (!ref.current!.contains(event.target as Node)) setOpen(false);
  };

  useEffect(() => {
    if (open) window.addEventListener('click', onClickOverlay);

    return () => window.removeEventListener('click', onClickOverlay);
  }, [open]);

  return (
    <div ref={ref} className={cx(styles.group, className && className)}>
      <div
        role='button'
        tabIndex={0}
        className={styles.select}
        onClick={onClickToggle}
      >
        <Body size='5' className={styles.text}>
          {localDatum.label}
        </Body>
        <Image src={Arrow} alt='arrow' width={18} height={18} />
      </div>
      {open && (
        <div className={styles.itemGroup}>
          {data.map((datum) => (
            <Body
              size='5'
              key={datum.value}
              className={styles.item}
              onClick={onClickItem(datum)}
            >
              {datum.label}
            </Body>
          ))}
        </div>
      )}
    </div>
  );
}
