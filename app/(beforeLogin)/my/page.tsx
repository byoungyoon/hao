import Heading from '@/app/components/text/Heading';
import Body from '@/app/components/text/Body';
import Image from 'next/image';
import Character from '@/app/image/character/my-character1.png';
import Character2 from '@/app/image/character/my-character2.png';
import Character3 from '@/app/image/character/my-character3.png';
import CustomCallback from '@/app/(beforeLogin)/_component/CustomCallback';
import CustomInfo from '@/app/(beforeLogin)/my/[text]/_component/CustomInfo';
import SuspenseMy from '@/app/(beforeLogin)/my/_suspense/SuspenseMy';
import CustomTitle from '@/app/(beforeLogin)/my/_component/CustomTitle';
import CustomMyTitle from '@/app/(beforeLogin)/my/_component/CustomMyTitle';
import CustomScrapTitle from '@/app/(beforeLogin)/my/_component/CustomScrapTitle';
import CustomReport from '@/app/(beforeLogin)/my/_component/CustomReport';
import CustomLogout from '@/app/(beforeLogin)/my/_component/CustomLogout';
import CustomPreModal from '@/app/(beforeLogin)/_component/CustomPreModal';

import * as styles from './page.css';

export default function MyPage() {
  return (
    <section className={styles.section}>
      <SuspenseMy>
        <article className={styles.infoArticle}>
          <hgroup className={styles.infoHgroup}>
            <CustomTitle />
            <Body size='5' className={styles.infoAside}>
              마음이 조금 가벼워졌길 바래!
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
        </article>
        <div className={styles.border} />
        <article className={styles.reportArticle}>
          <Heading size='2' className={styles.reportTitle}>
            후해 리포트
          </Heading>
          <CustomReport />
        </article>
      </SuspenseMy>
      <div className={styles.logoutLayer}>
        <CustomLogout />
        <CustomPreModal />
      </div>
    </section>
  );
}
