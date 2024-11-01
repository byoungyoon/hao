'use client';

import { useFeedForm } from '@/app/store/useTranslate';
import Search from '@/app/icon/search.svg';
import Vector from '@/app/icon/vector.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChangeEventHandler } from 'react';

import * as styles from './customInput.css';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function CustomInput() {
  const { search, updateSearch } = useFeedForm();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateSearch(event.target.value);
  };

  const onReset = () => {
    updateSearch('');
  };

  return (
    <div className={styles.inputLayer}>
      <Image src={Search} alt='search' />
      <input
        type='text'
        className={styles.input}
        value={search}
        onChange={onChange}
        placeholder='어떤 글을 찾아볼까?'
      />
      <AnimatePresence>
        {search !== '' && (
          <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <Image src={Vector} alt='search' onClick={onReset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
