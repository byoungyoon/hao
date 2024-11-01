'use client';

import Image from 'next/image';
import cx from 'classnames';
import Body from '@/app/components/text/Body';
import Edit from '@/app/icon/edit-gray.svg';
import Trash from '@/app/icon/trash-gray.svg';
import Like from '@/app/icon/like-activate.svg';
import LikeOff from '@/app/icon/like-deactivate.svg';
import Adopt from '@/app/icon/adopt-activate.svg';
import AdoptOff from '@/app/icon/adopt-deactivate.svg';
import { useFeedCommentDelete } from '@/app/components/template/feedOne/_state/useFeedCommentDelete';
import { useFeedCommentVote } from '@/app/components/template/feedOne/_state/useFeedCommentVote';
import { useFeedCommentAdopted } from '@/app/components/template/feedOne/_state/useFeedCommentAdopted';
import CustomImage from '@/app/components/card/_component/CustomImage';
import { useCommentForm } from '@/app/store/useTranslate';
import { makeBase64 } from '@/app/util/makeFile';

import * as styles from './customComment.css';

type Props = {
  feedId: number;
  id: number;
  image: string;
  nickname: string;
  date: string;
  age: number;
  comment: string;
  likeCount: number;
  commentImage?: string;

  hasSelect?: boolean;
  isEdit?: boolean;
  isAdmin?: boolean;
  isSelect?: boolean;
  isLike?: boolean;
  isHost?: boolean;
};

export default function CustomComment({
  id,
  image,
  nickname,
  date,
  age,
  comment,
  likeCount,
  commentImage,
  isEdit,
  isAdmin,
  hasSelect,
  isSelect,
  isLike,
  isHost,
}: Props) {
  const { updateComment } = useCommentForm();

  const { onDelete } = useFeedCommentDelete({ id: id });
  const { onVote } = useFeedCommentVote({ id: id });
  const { onAdopted } = useFeedCommentAdopted({ id: id });

  const onEdit = async () => {
    updateComment(
      id,
      comment,
      commentImage ? await makeBase64(commentImage) : '',
    );
  };

  return (
    <div className={styles.comment}>
      <div className={cx(styles.imageLayer, `age${age}`)}>
        <Image
          src={`data:image/svg+xml;base64,${image}`}
          alt='comment'
          width={15}
          height={13}
          unoptimized
        />
      </div>
      <div className={styles.commentLayer}>
        <hgroup className={styles.hgroup}>
          <div className={styles.nameLayer}>
            <div className={styles.nameGroup}>
              <Body size='5' className={cx(styles.nickname, isHost && 'admin')}>
                {nickname}
              </Body>
              <Body size='7' className={styles.age}>
                {age}대
              </Body>
            </div>
            <Body size='7' className={styles.date}>
              {date}
            </Body>
          </div>
          {isEdit && (
            <div className={styles.editLayer}>
              <Image
                src={Edit.src}
                alt='edit'
                width={20}
                height={20}
                onClick={onEdit}
                className={styles.image}
              />
              <Image
                src={Trash.src}
                alt='trash'
                width={20}
                height={20}
                onClick={onDelete}
                className={styles.image}
              />
            </div>
          )}
        </hgroup>
        <div className={styles.contentLayer}>
          {commentImage && <CustomImage images={[commentImage]} />}
          <Body size='6' className={styles.commentText}>
            {comment}
          </Body>
          <div className={styles.countLayer}>
            <div className={styles.countGroup}>
              <Image
                src={isLike ? Like : LikeOff}
                alt='like'
                width={24}
                height={24}
                onClick={onVote}
                className={styles.image}
              />
              <Body
                size='6'
                className={cx(styles.countText, isLike && 'orange')}
              >
                {likeCount}
              </Body>
            </div>
            {!hasSelect && isSelect && (
              <div className={styles.countGroup}>
                <Image src={Adopt} alt='like' width={24} height={24} />
                <Body
                  size='6'
                  className={cx(styles.countText, isSelect && 'orange')}
                >
                  채택
                </Body>
              </div>
            )}
            {hasSelect && isAdmin && !isHost && (
              <div className={styles.countGroup}>
                <Image
                  className={styles.image}
                  src={AdoptOff}
                  alt='like'
                  width={24}
                  height={24}
                  onClick={onAdopted}
                />
                <Body size='6' className={styles.countText}>
                  채택
                </Body>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
