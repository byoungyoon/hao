'use client';

import Image from 'next/image';
import Body from '@/app/components/text/Body';
import Comment from '@/app/icon/comment.svg';
import Default from '@/app/image/top5_default.png';
import cx from 'classnames';
import { makeSplitText } from '@/app/util/makeSplitText';
import { useMemo } from 'react';
import { useFeedVote } from '@/app/(beforeLogin)/_state/useFeedVote';
import { useClient } from '@/app/store/useClient';
import LikeOnIcon from '@/app/components/svg/LikeOnIcon';
import LikeOffIcon from '@/app/components/svg/LikeOffIcon';
import { vars } from '@/app/theme.css';

import * as styles from './customItem.css';

export type CustomItemDataTypes = {
  id: number;
  num: number;
  image: string;
  title: string;
  subTitle: string;

  like: number;
  comment: number;
  isLike?: boolean;

  onClick?: () => void;
};

type Props = CustomItemDataTypes;

export default function CustomItem({
  id,
  num,
  image,
  title,
  subTitle,
  like,
  comment,
  isLike,
  onClick,
}: Props) {
  const { vote } = useClient();

  const localVote = useMemo(() => {
    const find = vote[id];
    if (!find)
      return {
        state: isLike,
        trueCount: isLike ? like : like + 1,
        falseCount: isLike ? like - 1 : like,
      };

    return find;
  }, [vote, isLike, id]);

  const { onVote } = useFeedVote({ id: id, vote: localVote });

  return (
    <div role='button' tabIndex={0} className={styles.item} onClick={onClick}>
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
          <Image src={Default.src} alt='item' layout='fill' />
        )}
      </div>
      <div className={styles.titleLayer}>
        <Body size='3'>{makeSplitText(title, 10)}</Body>
        <Body size='6' className={styles.subTitle}>
          {subTitle}
        </Body>
      </div>
      <div className={styles.countLayer}>
        <span className={styles.countGroup}>
          <span onClick={onVote}>
            {localVote.state ? (
              <LikeOnIcon
                color={vars.color.orange['100']}
                borderColor={vars.color.orange['300']}
              />
            ) : (
              <LikeOffIcon />
            )}
          </span>
          <Body
            size='6'
            className={cx(styles.countText, localVote.state && 'orange')}
          >
            {localVote.state ? localVote.trueCount : localVote.falseCount}
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
