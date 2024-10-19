import Image from 'next/image';
import cx from 'classnames';
import Body from '@/app/components/text/Body';
import Edit from '@/app/icon/edit-gray.png';
import Trash from '@/app/icon/trash-gray.png';
import Like from '@/app/icon/like-activate.png';
import LikeOff from '@/app/icon/like-deactivate.png';
import Adopt from '@/app/icon/adopt-activate.png';
import AdoptOff from '@/app/icon/adopt-deactivate.png';

import * as styles from './customComment.css';

type Props = {
  image: string;
  nickname: string;
  date: string;
  age: number;
  comment: string;
  likeCount: number;

  isEdit?: boolean;
  isAdmin?: boolean;
  isSelect?: boolean;
  isLike?: boolean;
  isHost?: boolean;
};

export default function CustomComment({
  image,
  nickname,
  date,
  age,
  comment,
  likeCount,
  isEdit,
  isAdmin,
  isSelect,
  isLike,
  isHost,
}: Props) {
  return (
    <div className={styles.comment}>
      <div className={cx(styles.imageLayer, `age${age}`)}>
        <Image
          src={`data:image/png;base64,${image}`}
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
              <Image src={Edit} alt='edit' width={20} height={20} />
              <Image src={Trash} alt='trash' width={20} height={20} />
            </div>
          )}
        </hgroup>
        <div className={styles.contentLayer}>
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
              />
              <Body
                size='6'
                className={cx(styles.countText, isLike && 'orange')}
              >
                {likeCount}
              </Body>
            </div>
            {isAdmin && (
              <div className={styles.countGroup}>
                <Image
                  src={isSelect ? Adopt : AdoptOff}
                  alt='like'
                  width={24}
                  height={24}
                />
                <Body
                  size='6'
                  className={cx(styles.countText, isSelect && 'orange')}
                >
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
