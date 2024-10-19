import cx from 'classnames';
import Image from 'next/image';
import Body from '@/app/components/text/Body';
import InfoLayer from '@/app/components/layer/InfoLayer';
import Like from '@/app/icon/like-activate.png';
import LikeOff from '@/app/icon/like-deactivate.png';
import Comment from '@/app/icon/comment.png';
import Bookmark from '@/app/icon/bookmark-activate.png';
import BookmarkOff from '@/app/icon/bookmark-deactivate.png';

import * as styles from './card.css';

export type CardUserTypes = {
  /**
   * 프로필 이미지
   */
  profill: string;
  /**
   * 닉네임
   */
  nickname: string;
  /**
   * 나이
   */
  age: number;
};

export type CardDataTypes = {
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
  thumbnail?: string;
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

export type CardOptionTypes = {
  /**
   * 채택 여부
   */
  isAdopt?: boolean;
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
  data: CardDataTypes;
  option: CardOptionTypes;

  onClick?: () => void;
};

export default function Card({ user, data, option, onClick }: Props) {
  return (
    <div role='button' tabIndex={0} className={styles.item} onClick={onClick}>
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
        <span>
          <InfoLayer
            text={option.isAdopt ? '채택 완료' : '미채택'}
            color={option.isAdopt ? 'gray' : 'orange'}
          />
        </span>
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
        {data.thumbnail && (
          <div className={styles.thumbnailLayer}>
            <Image
              src={data.thumbnail}
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
          alt='list'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
