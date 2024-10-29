import Image from 'next/image';
import cx from 'classnames';

import * as styles from './customImage.css';

type Props = {
  images: string[];

  isContainer?: boolean;
};

export default function CustomImage({ images, isContainer }: Props) {
  return images.map((image, index) => (
    <div
      key={index}
      className={cx(styles.thumbnailLayer, isContainer && 'container')}
    >
      <Image
        src={image}
        alt='thumbnail'
        layout={isContainer ? 'fill' : 'responsive'}
        width={!isContainer ? 100 : undefined}
        height={!isContainer ? 100 : undefined}
        objectFit='cover'
        objectPosition='center'
      />
    </div>
  ));
}
