import { CardUserTypes } from '@/app/components/card/Card';

import cx from 'classnames';
import Image from 'next/image';
import Body from '@/app/components/text/Body';
import Comment from '@/app/icon/comment.svg';
import { MouseEventHandler } from 'react';
import Edit from '@/app/icon/edit-gray.svg';
import Trash from '@/app/icon/trash-gray.svg';
import CustomImage from '@/app/components/card/_component/CustomImage';
import CustomSubTitle from '@/app/components/card/_component/CustomSubTitle';
import LikeOnIcon from '@/app/components/svg/LikeOnIcon';
import LikeOffIcon from '@/app/components/svg/LikeOffIcon';
import { vars } from '@/app/theme.css';
import BookmarkOnIcon from '@/app/components/svg/BookmarkOnIcon';
import BookmarkOffIcon from '@/app/components/svg/BookmarkOffIcon';

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
  onScrap?: MouseEventHandler<HTMLImageElement>;
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
  return (
    <div className={styles.item}>
      <hgroup className={styles.hgroup}>
        <div className={styles.userGroup}>
          <span className={cx(styles.imageLayer, `age${user.age}`)}>
            <Image
              src={`data:image/svg+xml;base64,${user.profill}`}
              alt='user'
              width={26}
              height={25}
              unoptimized
            />
          </span>
          <div className={styles.userSubGroup}>
            <div className={styles.nameGroup}>
              <Body size='5'>{user.nickname}</Body>
              <Body size='5' className={styles.age}>
                {user.age}대
              </Body>
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
        {data.thumbnail && <CustomImage images={data.thumbnail} />}
        <CustomSubTitle subTitle={data.subTitle} />
      </div>
      <div className={styles.countLayer}>
        <div className={styles.countSubLayer}>
          <div className={styles.countGroup}>
            <span onClick={onVote} className={styles.image}>
              {option.isVote ? (
                <LikeOnIcon
                  color={vars.color.orange['100']}
                  borderColor={vars.color.orange['300']}
                />
              ) : (
                <LikeOffIcon />
              )}
            </span>
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
        <span onClick={onScrap} className={styles.image}>
          {option.isScrap ? (
            <BookmarkOnIcon
              color={vars.color.orange['100']}
              borderColor={vars.color.orange['300']}
            />
          ) : (
            <BookmarkOffIcon />
          )}
        </span>
      </div>
    </div>
  );
}
