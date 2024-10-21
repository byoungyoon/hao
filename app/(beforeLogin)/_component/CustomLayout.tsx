'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Navigation from '@/app/components/navigation/Navigation';
import { usePathname } from 'next/navigation';

import * as styles from './customLayout.css';

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  text?: string;
  className?: string;

  children: ReactNode;
};

export default function CustomLayout({
  left,
  right,
  text,
  className,
  children,
}: Props) {
  const pathname = usePathname();

  const ref = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (!ref.current) return;

    localStorage.setItem(
      `scrollPosition-${pathname}`,
      ref.current.scrollTop.toString(),
    );
  };

  useEffect(() => {
    const savedScrollPosition = localStorage.getItem(
      `scrollPosition-${pathname}`,
    );

    if (savedScrollPosition && ref.current) {
      ref.current.scrollTop = Number(savedScrollPosition);
    }
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <header>
        <Navigation
          text={text}
          left={left}
          right={right}
          className={className}
        />
      </header>
      <div className={styles.mainWrapper} ref={ref} onScroll={onScroll}>
        <div className={styles.mainWrapperOverflow}>{children}</div>
      </div>
    </div>
  );
}
