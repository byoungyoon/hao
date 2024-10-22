import { CardUserTypes } from '@/app/components/card/Card';

import cx from 'classnames';
import Image from 'next/image';
import Body from '@/app/components/text/Body';
import Like from '@/app/icon/like-activate.png';
import LikeOff from '@/app/icon/like-deactivate.png';
import Comment from '@/app/icon/comment.png';
import Bookmark from '@/app/icon/bookmark-activate.png';
import BookmarkOff from '@/app/icon/bookmark-deactivate.png';

import * as styles from './detailCard.css';

export type CardDetailDataTypes = {
  /**
   * 작성 날짜
   */
  date: string;
  /**
   * 제목
   */
  title: string;
  /**
   * 썸내일
   */
  thumbnail?: string[];
  /**
   * 내용
   */
  subTitle: string;
  /**
   * 좋아요 수
   */
  voteCount: number;
  /**
   * 댓글 수
   */
  commentCount: number;
  /**
   * 오늘의 질문
   */
  question: string;
  /**
   * 오늘의 질문 카테고리
   */
  questionCategory: string;
};

export type CardDetailOptionTypes = {
  /**
   * 스크랩 여부
   */
  isScrap?: boolean;
  /**
   * 좋아요 여부
   */
  isVote?: boolean;
  /**
   * 오늘의 질문 여부
   */
  isQuestion?: boolean;
};

type Props = {
  user: CardUserTypes;
  data: CardDetailDataTypes;
  option: CardDetailOptionTypes;

  onVote?: () => void;
  onScrap?: () => void;
};

export default function DetailCard({
  user,
  data,
  option,
  onVote,
  onScrap,
}: Props) {
  return (
    <div className={styles.item}>
      <hgroup className={styles.hgroup}>
        <div className={styles.userGroup}>
          <span className={cx(styles.imageLayer, `age${user.age}`)}>
            <Image
              src={`data:image/png;base64,${user.profill}`}
              alt='user'
              width={26}
              height={25}
              unoptimized
            />
          </span>
          <div className={styles.userSubGroup}>
            <div className={styles.nameGroup}>
              <Body size='5'>{user.nickname}</Body>
              <div className={styles.nameLayer}>{user.age}대</div>
            </div>
            <Body size='6' className={styles.date}>
              {data.date}
            </Body>
          </div>
        </div>
      </hgroup>
      <div className={styles.contentLayer}>
        {!option.isQuestion ? (
          <Body size='2'>{data.title}</Body>
        ) : (
          <div className={styles.questionLayer}>
            <div className={styles.questionCategory}>
              {data.questionCategory}
            </div>
            <Body size='5' className={styles.question}>
              Q. {data.question}
            </Body>
          </div>
        )}
        {data.thumbnail && data.thumbnail.length !== 0 && (
          <div className={styles.thumbnailLayer}>
            <Image
              src={data.thumbnail[0]}
              alt='thumbnail'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        )}
        <Body size='5' className={styles.subTitle}>
          {data.subTitle}
        </Body>
      </div>
      <div className={styles.countLayer}>
        <div className={styles.countSubLayer}>
          <div className={styles.countGroup}>
            <Image
              src={option.isVote ? Like : LikeOff}
              alt='list'
              width={24}
              height={24}
              onClick={onVote}
            />
            <Body
              size='5'
              className={cx(styles.countText, option.isVote && 'orange')}
            >
              {data.voteCount}
            </Body>
          </div>
          <div className={styles.countGroup}>
            <Image src={Comment} alt='list' width={24} height={24} />
            <Body size='5' className={styles.countText}>
              {data.commentCount}
            </Body>
          </div>
        </div>
        <Image
          src={option.isScrap ? Bookmark : BookmarkOff}
          alt='scarp'
          width={24}
          height={24}
          onClick={onScrap}
        />
      </div>
    </div>
  );
}
