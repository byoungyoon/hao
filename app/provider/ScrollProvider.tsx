'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';

import * as styles from './scrollprovider.css';

type Props = {
  children: ReactNode;
};

export default function ScrollProvider({ children }: Props) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (!ref.current) return;

    Cookies.set(
      `scrollPosition-${pathname}`,
      ref.current.scrollTop.toString(),
      { expires: 7, path: '/' },
    );
  };

  useEffect(() => {
    const savedScrollPosition = Cookies.get(`scrollPosition-${pathname}`);

    if (savedScrollPosition && ref.current) {
      ref.current.scrollTop = Number(savedScrollPosition);
    }
  }, [pathname]);

  return (
    <div className={styles.mainWrapper} ref={ref} onScroll={onScroll}>
      <div className={styles.mainWrapperOverflow}>{children}</div>
    </div>
  );
}
