'use client';

import Image from 'next/image';
import Character from '@/app/image/character/my-character1.svg';
import Character2 from '@/app/image/character/my-feed.svg';
import { useMy } from '@/app/(beforeLogin)/my/_state/useMy';

import * as styles from './customTitleImage.css';

export default function CustomTitleImage() {
  const { localData: myData } = useMy();

  return (
    <Image
      src={myData.boardCnt === 0 ? Character2 : Character}
      alt='character'
      className={styles.infoCharacter}
    />
  );
}
