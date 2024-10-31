'use client';

import Image from 'next/image';
import Body from '@/app/components/text/Body';
import Arrow from '@/app/icon/arrow-white.svg';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';

import * as styles from './customInfo.css';

export default function CustomInfo() {
  const { localData } = useUser();

  return (
    <>
      <div className={styles.infoModifyImage}>
        <div className={styles.infoModifyImageLayer}>
          <Image
            src={`data:image/png;base64,${localData.profile}`}
            alt='default'
            layout='fill'
            unoptimized
          />
        </div>
      </div>
      <div className={styles.infoModifyGroup}>
        <div className={styles.infoModifyNameGroup}>
          <Body size='1' className={styles.infoName}>
            {localData.nickname}
          </Body>
          <div className={styles.infoModifyAgeLayer}>
            <Body size='7' className={styles.infoAgeText}>
              {localData.age}대
            </Body>
          </div>
        </div>
        <button type='button' className={styles.infoModifyButton}>
          <Body size='5' className={styles.infoModifyButtonText}>
            내 정보 수정
          </Body>
          <Image src={Arrow} alt='arrow' width={18} height={18} />
        </button>
      </div>
    </>
  );
}
