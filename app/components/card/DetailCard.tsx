'use client';

import { CardUserTypes } from '@/app/components/card/Card';

import cx from 'classnames';
import Image from 'next/image';
import Body from '@/app/components/text/Body';
import Like from '@/app/icon/like-activate.png';
import LikeOff from '@/app/icon/like-deactivate.png';
import Comment from '@/app/icon/comment.png';
import Bookmark from '@/app/icon/bookmark-activate.png';
import BookmarkOff from '@/app/icon/bookmark-deactivate.png';
import { MouseEventHandler, useState } from 'react';
import Edit from '@/app/icon/edit-gray.png';
import Trash from '@/app/icon/trash-gray.png';
import CustomImage from '@/app/components/card/_component/CustomImage';

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
  /**
   * 수정, 삭제 여부
   */
  isEdit?: boolean;
};

type Props = {
  user: CardUserTypes;
  data: CardDetailDataTypes;
  option: CardDetailOptionTypes;

  onVote?: MouseEventHandler<HTMLImageElement>;
  onScrap?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};

export default function DetailCard({
  user,
  data,
  option,
  onVote,
  onScrap,
  onEdit,
  onDelete,
}: Props) {
  const [isFade, setIsFade] = useState(true);
  const [isContainer, setIsContainer] = useState(false);

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
        {option.isEdit && (
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
        <div className={styles.testButtonGroup}>
          <button type='button' onClick={() => setIsContainer(true)}>
            사진 레이아웃 고정
          </button>
          <button type='button' onClick={() => setIsContainer(false)}>
            사진 레이아웃 해제
          </button>
          <button type='button' onClick={() => setIsFade(true)}>
            사진 fade 효과
          </button>
          <button type='button' onClick={() => setIsFade(false)}>
            사진 slide 효과
          </button>
        </div>

        {data.thumbnail && (
          <div className={styles.slickLayer}>
            <CustomImage
              images={data.thumbnail}
              isContainer={isContainer}
              isFade={isFade}
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
              className={styles.image}
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
          className={styles.image}
        />
      </div>
    </div>
  );
}
