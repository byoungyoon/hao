'use client';

import Image from 'next/image';
import cx from 'classnames';
import Body from '@/app/components/text/Body';
import { useMemo, useState, MouseEvent } from 'react';
import Delete from '@/app/icon/alarm-delete.svg';

import * as styles from './customItem.css';

type Props = {
  age: number;
  image: string;
  nickname: string;
  type: 'LIKE' | 'COMMENT' | 'ADOPTED';
  message?: string;

  isAlive?: boolean;
};

export default function CustomItem({
  age,
  image,
  nickname,
  type,
  message,
  isAlive,
}: Props) {
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

  const onMouseDown = (event: MouseEvent) => {
    if (isMode) return;

    setIsDragging(true);
    setStartX(event.clientX);
  };

  const onMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const dx = Math.min(startX - event.clientX, 100);
    setTranslateX(Math.max(dx, 0));

    if (Math.max(dx, 0) >= 100) {
      setIsDragging(false);
      setIsMode(true);
    }
  };

  const onMouseUp = () => {
    if (isMode) return;

    setIsDragging(false);
    setTranslateX(0);
  };

  const onClick = () => {
    setIsMode(false);
  };

  return (
    <div
      className={cx(styles.item, !isAlive && 'noAlive')}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onClick={onClick}
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
          src={`data:image/png;base64,${image}`}
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
        {message && (
          <Body size='5' className={cx(styles.message, !isAlive && 'noAlive')}>
            {message}
          </Body>
        )}
      </div>
      <div className={styles.modeLayer}>
        <Image src={Delete} alt='delete' />
      </div>
    </div>
  );
}
