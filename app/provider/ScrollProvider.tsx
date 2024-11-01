'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import Up from '@/app/icon/arrow-up.svg';
import { useTopButton } from '@/app/store/useTranslate';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

import * as styles from './scrollprovider.css';

type Props = {
  children: ReactNode;
};

export default function ScrollProvider({ children }: Props) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);
  const state = useTopButton((state) => state.state);

  const controls = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);

  const onScroll = () => {
    if (!ref.current) return;

    Cookies.set(
      `scrollPosition-${pathname}`,
      ref.current.scrollTop.toString(),
      { expires: 7, path: '/' },
    );

    const currentScrollY = ref.current.scrollTop;

    if (currentScrollY > prevScrollY) controls.start({ opacity: 1, y: 0 });
    if (currentScrollY === 0) controls.start({ opacity: 0, y: 50 });

    setPrevScrollY(currentScrollY);
  };

  const onScrollTop = (duration: number) => () => {
    if (!ref.current) return;

    const start = ref.current.scrollTop;
    const change = -start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      if (!ref.current) return;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      ref.current.scrollTop = start + change * easeInOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  useEffect(() => {
    const savedScrollPosition = Cookies.get(`scrollPosition-${pathname}`);

    if (savedScrollPosition && ref.current) {
      ref.current.scrollTop = Number(savedScrollPosition);
    }
  }, [pathname]);

  return (
    <div className={styles.mainWrapper} ref={ref} onScroll={onScroll}>
      <div className={styles.mainWrapperOverflow}>
        {children}
        {state && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.3 }}
            role='button'
            tabIndex={0}
            className={styles.topButton}
            onClick={onScrollTop(600)}
          >
            <Image src={Up} alt='up' />
          </motion.div>
        )}
      </div>
    </div>
  );
}
