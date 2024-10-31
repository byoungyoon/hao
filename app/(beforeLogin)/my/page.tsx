import Heading from '@/app/components/text/Heading';
import Body from '@/app/components/text/Body';
import Image from 'next/image';
import Character from '@/app/image/character/my-character1.svg';
import Character2 from '@/app/image/character/my-character2.svg';
import Character3 from '@/app/image/character/my-character3.svg';
import CustomCallback from '@/app/(beforeLogin)/_component/CustomCallback';
import CustomInfo from '@/app/(beforeLogin)/my/[text]/_component/CustomInfo';
import SuspenseMy from '@/app/(beforeLogin)/my/_suspense/SuspenseMy';
import CustomTitle from '@/app/(beforeLogin)/my/_component/CustomTitle';
import CustomMyTitle from '@/app/(beforeLogin)/my/_component/CustomMyTitle';
import CustomScrapTitle from '@/app/(beforeLogin)/my/_component/CustomScrapTitle';
import CustomReport from '@/app/(beforeLogin)/my/_component/CustomReport';
import CustomLogout from '@/app/(beforeLogin)/my/_component/CustomLogout';
import CustomArticle from '@/app/(beforeLogin)/my/_component/CustomArticle';

import * as styles from './page.css';

export default function MyPage() {
  return (
    <section className={styles.section}>
      <SuspenseMy>
        <CustomArticle
          className={styles.infoArticle}
          transition={{ duration: 0.3 }}
        >
          <hgroup className={styles.infoHgroup}>
            <CustomTitle />
            <Body size='5' className={styles.infoAside}>
              마음이 조금 가벼워졌길 바라!
            </Body>
            <Image
              src={Character}
              alt='character'
              className={styles.infoCharacter}
            />
          </hgroup>
          <CustomCallback
            className={styles.infoModifyLayer}
            callback='/my/내 정보 수정/modify'
          >
            <CustomInfo />
          </CustomCallback>
          <div className={styles.infoLayerGroup}>
            <CustomCallback
              className={styles.infoMyLayer}
              callback='/my/내 후회/feed'
            >
              <Body size='1'>내 후회</Body>
              <CustomMyTitle />
              <Image
                src={Character2}
                alt='character'
                className={styles.infoMyImage}
              />
            </CustomCallback>
            <CustomCallback
              className={styles.infoScrapLayer}
              callback='/my/스크랩/scrap'
            >
              <Body size='1'>스크랩</Body>
              <CustomScrapTitle />
              <Image
                src={Character3}
                alt='character'
                className={styles.infoScrapImage}
              />
            </CustomCallback>
          </div>
        </CustomArticle>
        <div className={styles.border} />
        <CustomArticle
          className={styles.reportArticle}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Heading size='2' className={styles.reportTitle}>
            후해 리포트
          </Heading>
          <CustomReport />
        </CustomArticle>
      </SuspenseMy>
      <div className={styles.logoutLayer}>
        <CustomLogout />
      </div>
    </section>
  );
}
