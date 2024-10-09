'use client';

import Report from '@/app/icon/report.png';
import Image from 'next/image';
import Body from '@/app/components/text/Body';
import { useMemo } from 'react';

import * as styles from './customReport.css';

type Props = {
  mode?: '후추' | '후시딘' | '작성자';
};

export default function CustomReport({ mode }: Props) {
  const text = useMemo(() => {
    if (mode === '후시딘')
      return '작성자에게 긍정적으로 아물 수 있는 후시딘이 되어줘';
    if (mode === '후추') return '작성자에게 진지하게 톡 쏘는 후추가 되어줘';
    if (mode === '작성자')
      return '한 친구에게만 몰래 힘이 됐다는 말을 전해줄게';

    return '앞으로 같은 상황이 온다면 어떻게 할지 적어봐~';
  }, [mode]);

  return (
    <div className={styles.report}>
      <Image src={Report} alt='report' width={24} height={24} />
      <Body size='6' className={styles.text}>
        {text}
      </Body>
    </div>
  );
}
