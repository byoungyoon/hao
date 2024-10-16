import cx from 'classnames';

import * as styles from './progress.css';

type Props = {
  count: number;
  select: number;
};

export default function Progress({ count, select }: Props) {
  return (
    <div className={styles.itemGroup}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cx(styles.item, select === index && 'orange')}
        />
      ))}
    </div>
  );
}
