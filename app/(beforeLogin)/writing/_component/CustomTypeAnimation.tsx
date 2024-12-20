'use client';

import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/store/useTranslate';

import * as styles from './customTypeAnimation.css';
import { useRouter } from 'next/navigation';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function CustomTypeAnimation() {
  const router = useRouter();
  const { updateTheme } = useTheme();

  const [isFinished, setIsFinished] = useState(false);

  const onFinished = () => {
    setIsFinished(true);
    updateTheme('event');

    setTimeout(() => {
      router.push('/home');
    }, 600);
  };

  return (
    <>
      <TypeAnimation
        sequence={[
          '너에게 주는 겨울 선물!',
          3000,
          '주의!! 갑자기, 글이 써지고 지워져도 놀라지마세요. (심약자 주의)',
          3000,
          '너의 첫 프로젝트, 첫 앱, 첫 웹 페이지가 오랫동안 특별하게 기억속에 남기를 바라며',
          3000,
          '너만 알 수 있도록 비밀 기능 넣어볼게',
          3000,
          '이 비밀로 조금이나마 후해가 좀 더 특별해 졌으면 좋겠어!!',
          3000,
          () => onFinished(),
        ]}
        wrapper='span'
        speed={1}
        cursor={true}
        repeat={0}
        className={styles.item}
      />
      {isFinished && (
        <motion.div
          className={styles.white}
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.4 }}
        />
      )}
    </>
  );
}
