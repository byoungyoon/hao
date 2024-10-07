import { ReactNode } from 'react';
import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import Image from 'next/image';
import Logo1 from '@/app/icon/logo/logo-1.png';
import Logo2 from '@/app/icon/logo/logo-2.png';
import AlarmOn from '@/app/icon/alarm-on.png';

import * as styles from './layout.css';

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <CustomLayout
      left={
        <div className={styles.left}>
          <Image src={Logo1} alt='logo' />
          <Image src={Logo2} alt='logo' />
        </div>
      }
      right={<Image src={AlarmOn} alt='alarm' width={24} height={24} />}
    >
      {children}
    </CustomLayout>
  );
}
