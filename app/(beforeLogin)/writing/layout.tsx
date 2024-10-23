import { ReactNode } from 'react';
import Navigation from '@/app/components/navigation/Navigation';
import BackButton from '@/app/(beforeLogin)/_component/BackButton';

import * as styles from '@/app/(beforeLogin)/_component/customLayout.css';

type Props = {
  children: ReactNode;
  params: Promise<{ left: string }>;
};

export default async function WritingLayout({ children, params }: Props) {
  const { left } = await params;

  return (
    <div className={styles.wrapper}>
      <Navigation text='글 쓰기' left={left && <BackButton />} />
      <div className={styles.mainWrapper}>{children}</div>
    </div>
  );
}
