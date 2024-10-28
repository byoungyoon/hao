'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Heart from '@/app/icon/like-activate.png';
import { useHeart } from '@/app/store/useHeart';

import * as styles from './heartCanvas.css';

type HeartDataTypes = {
  angle: number;
  x: number;
  y: number;
  speed: number;
  initialY: number;
  alpha: number;
};

type Props = {
  id?: string;

  max?: number;
  alpha?: number;
  width?: number;
  speed?: number;
};

export default function HeartCanvas({
  id,
  max = 13,
  alpha = 0.01,
  width = 13,
  speed = 1.4,
}: Props) {
  const { x, y, update } = useHeart();

  const [hearts, setHearts] = useState<HeartDataTypes[]>([]);
  const ref = useRef<HTMLCanvasElement>(null);

  const localUpdate = useMemo(() => update, []);

  const image = useMemo(() => {
    const element = new Image();
    element.src = Heart.src;
    element.alt = 'heart';

    return element;
  }, []);

  const onResize = useCallback(() => {
    if (!ref.current) return;

    const ctx = ref.current.getContext('2d')!;

    ctx.canvas.width = id
      ? (document.getElementById(id)?.clientWidth ?? 0)
      : (window.innerWidth ?? 0);
    ctx.canvas.height = id
      ? (document.getElementById(id)?.clientHeight ?? 0)
      : (window.innerHeight ?? 0);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }, [id]);

  const onMove = useCallback(() => {
    setHearts((prevState) =>
      prevState
        .map((heart) => {
          const angleInRadians = (heart.angle * Math.PI) / 180;

          const nX = heart.x + Math.cos(angleInRadians) * heart.speed;
          const nY = heart.y - Math.sin(angleInRadians) * heart.speed;
          const nAlpha = heart.alpha - alpha;

          return { ...heart, x: nX, y: nY, alpha: nAlpha };
        })
        .filter((heart) => heart.y + image.height > 0 && heart.alpha > 0),
    );

    requestAnimationFrame(onMove);
  }, [alpha, speed]);

  const onAction = (x: number, y: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const nX = x - rect.left;
    const nY = y - rect.top + 5;

    for (let i = 0; i < max; i++) {
      const randomAngle = 90 + (Math.random() * 60 - 30);
      const sSpeed = (1 + Math.random() ** 2) / speed;

      setHearts((prevState) => [
        ...prevState,
        {
          x: nX,
          y: nY,
          initialY: nY,
          angle: randomAngle,
          speed: sSpeed,
          alpha: 0.8,
        },
      ]);
    }
  };

  useEffect(() => {
    onResize();
    onMove();
  }, [alpha, speed, id]);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = ref.current.getContext('2d')!;

    ctx.clearRect(0, 0, ref.current.width, ref.current.height);

    hearts.forEach((heart) => {
      ctx.globalAlpha = heart.alpha;
      const heartWidth = width;
      const heartHeight = (image.height / image.width) * heartWidth;

      ctx.drawImage(
        image,
        heart.x - heartWidth / 2,
        heart.y - heartHeight / 2,
        heartWidth,
        heartHeight,
      );
    });
  }, [hearts, width]);

  useEffect(() => {
    if (localUpdate === update) return;

    onAction(x, y);
  }, [x, y, update]);

  return (
    <div className={styles.canvas}>
      <canvas ref={ref} />
    </div>
  );
}
