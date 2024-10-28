'use client';

import { ReactNode, useMemo } from 'react';
import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import Image from 'next/image';
import Logo1 from '@/app/icon/logo/logo-1.png';
import Logo2 from '@/app/icon/logo/logo-2.png';
import AlarmOn from '@/app/icon/alarm-on.png';
import { usePathname, useRouter } from 'next/navigation';
import Arrow from '@/app/icon/arrow-left.png';
import cx from 'classnames';

import * as styles from './layout.css';
import CustomAlarm from '@/app/(beforeLogin)/home/_component/CustomAlarm';

const PATH = '/home';

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const defaultPage = useMemo(() => pathname === PATH, [pathname]);

  const onClickBack = () => {
    router.push(PATH, { scroll: false });
  };

  return (
    <CustomLayout
      text={defaultPage ? '' : '글 상세'}
      left={
        defaultPage ? (
          <div className={styles.left}>
            <Image src={Logo1} alt='logo' />
            <Image src={Logo2} alt='logo' />
          </div>
        ) : (
          <Image
            src={Arrow}
            alt='arrow'
            width={24}
            height={24}
            onClick={onClickBack}
          />
        )
      }
      right={defaultPage && <CustomAlarm />}
      className={cx(defaultPage && styles.navigation)}
    >
      {children}
    </CustomLayout>
  );
}
