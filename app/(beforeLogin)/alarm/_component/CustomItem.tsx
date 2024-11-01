'use client';

import Image from 'next/image';
import cx from 'classnames';
import Body from '@/app/components/text/Body';
import { useMemo, useState, MouseEvent, TouchEvent } from 'react';
import Delete from '@/app/icon/alarm-delete.svg';
import { useAlarmDelete } from '@/app/(beforeLogin)/alarm/_state/useAlarmDelete';
import { useToast } from '@/app/store/useToast';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { motion } from 'framer-motion';

import * as styles from './customItem.css';

dayjs.extend(utc);
dayjs.extend(duration);

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

type Props = {
  id: number;
  age: number;
  image: string;
  boardId: number;
  nickname: string;
  type: 'LIKE' | 'COMMENT' | 'ADOPTED';

  isAlive?: boolean;
  createdAt: string;
};

export default function CustomItem({
  id,
  boardId,
  age,
  image,
  nickname,
  type,
  isAlive,
  createdAt,
}: Props) {
  const router = useRouter();
  const updateToast = useToast((state) => state.updateToast);

  const [translateX, setTranslateX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [isMode, setIsMode] = useState(false);

  const title = useMemo(() => {
    if (type === 'LIKE') return '이 너의 글을 좋아해!';
    if (type === 'COMMENT') return '가 너의 글에 댓글을 남겼어!';
    if (type === 'ADOPTED') return '가 너의 답변이 힘이 됐대!';

    return '';
  }, [type]);

  const localTime = useMemo(() => {
    const time = dayjs(createdAt);
    const now = dayjs();
    const diffInMinutes = now.diff(time, 'minute');
    const diffInHours = now.diff(time, 'hour');

    if (diffInMinutes < 60) {
      if (diffInMinutes === 0) {
        return '방금';
      } else if (diffInMinutes === 1) {
        return '최근 1분 전';
      } else {
        return `최근 ${diffInMinutes}분 전`;
      }
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      const diffInDays = now.diff(time, 'day');
      return `${diffInDays}일 전`;
    }
  }, [createdAt]);

  const onActionDown = (x: number) => {
    if (isMode) {
      return;
    }

    setIsDragging(true);
    setStartX(x);
  };

  const onActionMove = (x: number) => {
    if (!isDragging) return;

    const dx = Math.min(startX - x, 80);
    setTranslateX(Math.max(dx, 0));

    if (Math.max(dx, 0) >= 80) {
      setIsDragging(false);
      setIsMode(true);
    }
  };

  const onActionUp = () => {
    if (isMode) return;

    setIsDragging(false);
    setTranslateX(0);
  };

  const onMouseDown = (event: MouseEvent) => onActionDown(event.clientX);
  const onMouseMove = (event: MouseEvent) => onActionMove(event.clientX);
  const onMouseUp = () => onActionUp();

  const onTouchStart = (event: TouchEvent) =>
    onActionDown(event.touches[0].clientX);
  const onTouchMove = (event: TouchEvent) =>
    onActionMove(event.touches[0].clientX);
  const onTouchEnd = () => onActionUp();

  const { onDelete } = useAlarmDelete({ id: id });

  const onClickItem = () => {
    if (isMode) {
      setIsMode(false);
      return;
    }

    if (!isAlive) updateToast('작성자가 삭제해서 볼 수 없어');
    else router.push(`/feed/${boardId}`);
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.4 }}
      className={cx(styles.item, !isAlive && 'noAlive')}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={onClickItem}
      style={{
        transform: `translateX(-${translateX}px)`,
        transition: isDragging ? 'none' : 'transform 0.3s',
      }}
    >
      <div
        className={cx(styles.imageLayer, `age${age}`, !isAlive && 'noAlive')}
      >
        <Image
          className={cx(styles.image, !isAlive && 'noAlive')}
          src={`data:image/svg+xml;base64,${image}`}
          alt='alarm'
          width={38}
          height={38}
          unoptimized
        />
      </div>
      <div className={styles.textLayer}>
        <Body size='3' className={cx(styles.title, !isAlive && 'noAlive')}>
          {isAlive ? (
            <>
              &apos;<strong>{nickname}</strong>&apos; {title}
            </>
          ) : (
            <>
              &apos;{nickname}&apos; {title}
            </>
          )}
        </Body>
        <Body size='5' className={styles.date}>
          {localTime}
        </Body>
      </div>
      <div
        role='button'
        tabIndex={0}
        className={styles.modeLayer}
        onClick={onDelete}
        onTouchEnd={onDelete}
      >
        <Image src={Delete} alt='delete' />
      </div>
    </motion.div>
  );
}
