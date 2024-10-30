'use client';

import Image from 'next/image';
import Vector from '@/app/icon/vector.svg';
import { useWritingForm } from '@/app/store/useTranslate';
import { ChangeEventHandler, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import * as styles from './customInput.css';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function CustomInput() {
  const { title, updateTitle } = useWritingForm();

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateTitle(event.target.value);
  };

  const onClickReset = () => {
    updateTitle('');
  };

  useEffect(() => {
    return () => updateTitle('');
  }, [updateTitle]);

  return (
    <div className={styles.inputLayer}>
      <input
        type='text'
        className={styles.input}
        placeholder='제목을 지어줘!'
        value={title}
        onChange={onChangeInput}
      />
      <AnimatePresence>
        {title.length !== 0 && (
          <motion.div
            role='button'
            tabIndex={0}
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            onClick={onClickReset}
          >
            <Image
              src={Vector.src}
              alt='vector'
              className={styles.inputReset}
              width={16}
              height={17}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
