'use client';

import InfoLayer from '@/app/components/layer/InfoLayer';
import Image, { StaticImageData } from 'next/image';
import Body from '@/app/components/text/Body';
import Bookmark from '@/app/icon/bookmark-activate.png';
import BookmarkOff from '@/app/icon/bookmark-deactivate.png';
import Like from '@/app/icon/like-activate.png';
import LikeOff from '@/app/icon/like-deactivate.png';
import Comment from '@/app/icon/comment.png';
import cx from 'classnames';

import * as styles from './customItem.css';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  image: string | StaticImageData;
  nickname: string;
  date: string;
  age: number;

  title: string;
  thumbnail?: string | StaticImageData;
  subTitle: string;

  like: number;
  comment: number;

  isaAdopt?: boolean;
  hasAdopt?: boolean;

  isBookmark?: boolean;
  isLike?: boolean;

  height?: number;

  callback?: string;
};

export default function CustomItem({
  image,
  nickname,
  date,
  age,
  title,
  subTitle,
  thumbnail,
  like,
  comment,
  isLike,
  isaAdopt,
  hasAdopt = true,
  isBookmark,
  height = 142,
  callback,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onLocalClick = () => {
    if (!callback) return;

    router.push(`${pathname}/${callback}`);
  };

  return (
    <div
      role='button'
      tabIndex={0}
      className={styles.item}
      onClick={onLocalClick}
    >
      <hgroup className={styles.hgroup}>
        <div className={styles.userGroup}>
          <span className={cx(styles.imageLayer, `age${age}`)}>
            <Image src={image} alt='user' width={26} height={25} />
          </span>
          <div className={styles.userSubGroup}>
            <div className={styles.nameGroup}>
              <Body size='5'>{nickname}</Body>
              <div className={styles.nameLayer}>{age}대</div>
            </div>
            <Body size='6' className={styles.date}>
              {date}
            </Body>
          </div>
        </div>
        {hasAdopt && (
          <span>
            <InfoLayer
              text={isaAdopt ? '채택 완료' : '미채택'}
              color={isaAdopt ? 'gray' : 'orange'}
            />
          </span>
        )}
      </hgroup>
      <div className={styles.contentLayer}>
        <Body size='2'>{title}</Body>
        {thumbnail && (
          <div className={styles.thumbnailLayer} style={{ height: height }}>
            <Image src={thumbnail} alt='thumbnail' />
          </div>
        )}
        <Body size='5' className={styles.subTitle}>
          {subTitle}
        </Body>
      </div>
      <div className={styles.countLayer}>
        <div className={styles.countSubLayer}>
          <div className={styles.countGroup}>
            <Image
              src={isLike ? Like : LikeOff}
              alt='list'
              width={24}
              height={24}
            />
            <Body size='5' className={cx(styles.countText, isLike && 'orange')}>
              {like}
            </Body>
          </div>
          <div className={styles.countGroup}>
            <Image src={Comment} alt='list' width={24} height={24} />
            <Body size='5' className={styles.countText}>
              {comment}
            </Body>
          </div>
        </div>
        <Image
          src={isBookmark ? Bookmark : BookmarkOff}
          alt='list'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
