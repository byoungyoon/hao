'use client';

import { ReactNode, useMemo } from 'react';
import Progress from '@/app/(afterLogin)/_component/Progress';
import Image from 'next/image';
import Arrow from '@/app/icon/arrow-left.svg';
import { usePathname, useRouter } from 'next/navigation';
import RQProvider from '@/app/provider/RQProvider';

import * as styles from './layout.css';

const PATH = ['/age', '/point', '/result'];

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const currIndex = useMemo(() => PATH.indexOf(pathname), [pathname]);

  const onClickPre = () => {
    router.replace(PATH[currIndex - 1]);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        {currIndex !== 0 && (
          <Image
            src={Arrow}
            alt='arrow'
            width={24}
            height={24}
            onClick={onClickPre}
          />
        )}
      </header>
      <div className={styles.progressLayer}>
        <Progress count={3} select={currIndex} />
      </div>
      <div className={styles.bodyLayer}>
        <RQProvider>{children}</RQProvider>
      </div>
    </main>
  );
}
