import Button from '@/app/components/button/Button';
import Heading from '@/app/components/text/Heading';
import Body from '@/app/components/text/Body';
import CustomChartItem from '@/app/(beforeLogin)/my/_component/CustomChartItem';
import Image from 'next/image';
import Character from '@/app/image/character/my-character1.png';
import Character2 from '@/app/image/character/my-character2.png';
import Character3 from '@/app/image/character/my-character3.png';
import CustomCallback from '@/app/(beforeLogin)/_component/CustomCallback';
import CustomInfo from '@/app/(beforeLogin)/my/_component/CustomInfo';

import * as styles from './page.css';

export default function MyPage() {
  return (
    <section className={styles.section}>
      <article className={styles.infoArticle}>
        <hgroup className={styles.infoHgroup}>
          <div>
            <Heading size='2'>지금까지 뱉은 후회 5개 중</Heading>
            <Heading size='2'>
              <text>3개</text>를 후~ 날렸어
            </Heading>
          </div>
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
          callback='/my/modify'
        >
          <CustomInfo />
        </CustomCallback>
        <div className={styles.infoLayerGroup}>
          <div className={styles.infoMyLayer}>
            <Body size='1'>내 후회</Body>
            <Body size='3' className={styles.infoLayerText}>
              8개
            </Body>
            <Image
              src={Character2}
              alt='character'
              className={styles.infoMyImage}
            />
          </div>
          <CustomCallback
            className={styles.infoScrapLayer}
            callback='/my/scrap'
          >
            <Body size='1'>스크랩</Body>
            <Body size='3' className={styles.infoLayerText}>
              13개
            </Body>
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
        <div className={styles.reportLayer}>
          <Heading size='2'>정재현내꺼는</Heading>
          <Heading size='2'>
            &apos;<text>대인관계</text>&apos;에 제일 많은 후회를 했어
          </Heading>
          <Body size='5' className={styles.reportAside}>
            과거의 후회를 되돌아보며 더 나은 내가 되어보자!
          </Body>
          <div className={styles.chart}>
            <CustomChartItem text='진로' rank={2} count={3} />
            <CustomChartItem text='대인관계' rank={1} count={4} />
            <CustomChartItem text='연애' rank={3} count={1} />
          </div>
        </div>
      </article>
      <div className={styles.logoutLayer}>
        <Button
          size='auto'
          text='로그아웃'
          color='gray'
          className={styles.logout}
        />
      </div>
    </section>
  );
}
