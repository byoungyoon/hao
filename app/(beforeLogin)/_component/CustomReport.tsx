'use client';

import Report from '@/app/icon/report.svg';
import Image from 'next/image';
import Body from '@/app/components/text/Body';
import { Fragment, useEffect, useMemo } from 'react';
import { motion, useCycle } from 'framer-motion';

import * as styles from './customReport.css';

type Props = {
  mode?: '후추' | '후시딘' | '작성자' | '다중';
};

export default function CustomReport({ mode }: Props) {
  const text = useMemo(() => {
    if (mode === '후시딘')
      return ['작성자에게 긍정적으로 아물 수 있는 ', '후시딘', '이 되어줘'];
    if (mode === '후추')
      return ['작성자에게 진지하게 톡 쏘는 ', '후추', '가 되어줘'];
    if (mode === '작성자')
      return ['한 친구', '에게만 몰래 힘이 됐다는 말을 전해줄게', ''];

    if (mode === '다중')
      return [
        '앞으로 같은 상황이 온다면 어떻게 할지 적어봐~',
        '무엇을 느꼈는지 친구들한테 공유하면 좋겠다!',
        '어떻게 하는 게 최선이었다고 생각해?',
      ];

    return [];
  }, [mode]);

  const [currentText, cycleText] = useCycle(
    ...(Array.isArray(text) ? text : [text]),
  );

  useEffect(() => {
    if (mode === '다중') {
      setInterval(() => {
        cycleText();
      }, 2500);
    }
  }, [mode, cycleText]);

  return (
    <div className={styles.report}>
      {mode === '다중' ? (
        <motion.div
          className={styles.textLayer}
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Report} alt='report' width={24} height={24} />
          <Body size='6' className={styles.text}>
            {currentText}
          </Body>
        </motion.div>
      ) : (
        <>
          <Image src={Report} alt='report' width={24} height={24} />
          <Body size='6' className={styles.text}>
            {text.map((datum, index) =>
              datum === '후시딘' || datum === '후추' || datum === '한 친구' ? (
                <strong key={index}>{datum}</strong>
              ) : (
                <Fragment key={index}>{datum}</Fragment>
              ),
            )}
          </Body>
        </>
      )}
    </div>
  );
}
