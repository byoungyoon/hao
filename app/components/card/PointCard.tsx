import cx from 'classnames';
import Image from 'next/image';

import * as styles from './pointCard.css';

type Props = {
  className?: string;
  image: string;

  onClick?: () => void;
};

export default function PointCard({ className, image, onClick }: Props) {
  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(styles.item)}
      onClick={onClick}
    >
      <div className={cx(className, styles.full)}>
        <Image
          src={`data:image/svg+xml;base64,${image}`}
          alt='point'
          width={138}
          height={143}
          unoptimized
        />
      </div>
    </div>
  );
}
