import Image from 'next/image';
import cx from 'classnames';

import * as styles from './customItem.css';

type Props = {
  className?: string;
  image: string;

  onClick?: () => void;
};

export default function CustomItem({ className, image, onClick }: Props) {
  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(styles.item, className)}
      onClick={onClick}
    >
      <Image
        src={`data:image/svg+xml;base64,${image}`}
        alt='point'
        width={138}
        height={143}
        unoptimized
      />
    </div>
  );
}
