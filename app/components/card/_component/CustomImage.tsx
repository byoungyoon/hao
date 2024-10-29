import Image from 'next/image';
import Slick from '@/app/components/slick/Slick';
import cx from 'classnames';

import * as styles from './customImage.css';

type Props = {
  images: string[];

  isContainer?: boolean;
  isFade?: boolean;
};

export default function CustomImage({ images, isContainer, isFade }: Props) {
  if (images.length <= 1)
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

  return (
    <Slick isFade={isFade}>
      {images.map((image, index) => (
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
      ))}
    </Slick>
  );
}
