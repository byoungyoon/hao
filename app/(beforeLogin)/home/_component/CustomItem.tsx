import Image, { StaticImageData } from 'next/image';
import Body from '@/app/components/text/Body';
import Like from '@/app/icon/like-activate.png';
import LikeOff from '@/app/icon/like-deactivate.png';
import Comment from '@/app/icon/comment.png';
import Default from '@/app/image/top5_default.png';

import cx from 'classnames';
import { makeSplitText } from '@/app/util/makeSplitText';
import * as styles from './customItem.css';

export type CustomItemDataTypes = {
  num: number;
  image: string;
  title: string;
  subTitle: string;

  like: number;
  comment: number;
  isLike?: boolean;
};

type Props = CustomItemDataTypes;

export default function CustomItem({
  num,
  image,
  title,
  subTitle,
  like,
  comment,
  isLike,
}: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.numLayer}>
        <Body size='1' className={styles.numText}>
          {num}
        </Body>
      </div>
      <div className={styles.imageLayer}>
        {image ? (
          <Image
            src={image}
            alt='item'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        ) : (
          <Image src={Default} alt='item' width={214} height={172} />
        )}
      </div>
      <div className={styles.titleLayer}>
        <Body size='3'>{makeSplitText(title, 10)}</Body>
        <Body size='6' className={styles.subTitle}>
          {makeSplitText(subTitle, 50)}
        </Body>
      </div>
      <div className={styles.countLayer}>
        <span className={styles.countGroup}>
          <Image
            src={isLike ? Like : LikeOff}
            alt='like'
            width={24}
            height={24}
          />
          <Body size='6' className={cx(styles.countText, isLike && 'orange')}>
            {like}
          </Body>
        </span>
        <span className={styles.countGroup}>
          <Image src={Comment} alt='comment' width={24} height={24} />
          <Body size='6' className={styles.countText}>
            {comment}
          </Body>
        </span>
      </div>
    </div>
  );
}
