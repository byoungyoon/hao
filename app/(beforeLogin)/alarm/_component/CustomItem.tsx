'use client';

import Image from 'next/image';
import cx from 'classnames';
import Body from '@/app/components/text/Body';
import {
  useMemo,
  useState,
  MouseEvent,
  TouchEvent,
  MouseEventHandler,
  useEffect,
} from 'react';
import Delete from '@/app/icon/alarm-delete.svg';
import { useAlarmDelete } from '@/app/(beforeLogin)/alarm/_state/useAlarmDelete';
import { useToast } from '@/app/store/useToast';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import CustomItemDate from '@/app/(beforeLogin)/alarm/_component/CustomItemDate';

import * as styles from './customItem.css';
import { useAlarmSelect } from '@/app/(beforeLogin)/alarm/_state/useAlarmSelect';

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
  isSelect?: boolean;
  createdAt: string;

  onTrackable?: (id: number) => void;
  target: number;
};

export default function CustomItem({
  id,
  boardId,
  age,
  image,
  nickname,
  type,
  isAlive,
  isSelect,
  createdAt,
  onTrackable,
  target,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

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

  const onActionDown = (x: number) => {
    setIsDragging(true);
    setStartX(x);
    if (onTrackable) onTrackable(id);
  };

  const onActionMove = (x: number) => {
    if (!isDragging) return;

    const dx = Math.min(startX - x, 80);
    setTranslateX(Math.max(dx, 0));

    if (Math.max(dx, 0) >= 80) {
      setIsDragging(false);
      setIsMode(true);
    } else {
      setIsMode(false);
    }
  };

  const onActionUp = () => {
    setIsDragging(false);

    if (!isMode) setTranslateX(0);
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
  const { onSelect } = useAlarmSelect({ id: id });

  const onClickItem: MouseEventHandler<HTMLDivElement> = (event) => {
    if (isMode || event.clientX !== startX) return;

    if (!isAlive) updateToast('작성자가 삭제해서 볼 수 없어');
    else {
      onSelect();
      router.push(`${pathname}/${boardId}`);
    }
  };

  useEffect(() => {
    if (target !== id) {
      setIsMode(false);
      setTranslateX(0);
      setIsDragging(false);
    }
  }, [target, id, setIsMode, setTranslateX, setIsDragging]);

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.4 }}
      className={cx(styles.item, !isSelect && 'noAlive')}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        transform: `translateX(-${translateX}px)`,
        transition: 'transform 0.3s',
      }}
    >
      <div className={styles.itemLayer} onMouseUp={onClickItem}>
        <div
          className={cx(styles.imageLayer, `age${age}`, !isSelect && 'noAlive')}
        >
          <Image
            className={cx(styles.image, !isSelect && 'noAlive')}
            src={`data:image/svg+xml;base64,${image}`}
            alt='alarm'
            width={38}
            height={38}
            unoptimized
          />
        </div>
        <div className={styles.textLayer}>
          <Body size='3' className={cx(styles.title, !isSelect && 'noAlive')}>
            {isSelect ? (
              <>
                &apos;<strong>{nickname}</strong>&apos; {title}
              </>
            ) : (
              <>
                &apos;{nickname}&apos; {title}
              </>
            )}
          </Body>
          <CustomItemDate date={createdAt} />
        </div>
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
