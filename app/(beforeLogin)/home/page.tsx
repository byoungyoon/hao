import CustomTopLayer from '@/app/(beforeLogin)/home/_component/CustomTopLayer';
import Heading from '@/app/components/text/Heading';
import Info from '@/app/icon/info.png';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ko';
import Image, { StaticImageData } from 'next/image';
import InfoLayer from '@/app/components/layer/InfoLayer';
import Body from '@/app/components/text/Body';
import CustomTab from '@/app/(beforeLogin)/home/_component/CustomTab';
import Sample from '@/app/image/sample/sample.png';
import CustomItem from '@/app/(beforeLogin)/home/_component/CustomItem';

import * as styles from './page.css';

dayjs.extend(localizedFormat);
dayjs.locale('ko');

export default function HomePage() {
  const sampleData = {
    num: 1,
    title: '모의고사 1점차이로 영어가 망했다',
    subTitle:
      '마킹 실수만 아이었어도 2등급인데 시간이 없어서 5분동안 마킹하다가 잘못 마킹한 게 있었어',
    like: 43,
    comment: 13,
    isLike: true,
    image: Sample,
  };

  return (
    <div className={styles.layer}>
      <CustomTopLayer>
        <hgroup className={styles.hgroup}>
          <Heading size='1'>{dayjs().format('M월 D일 dddd')}</Heading>
          <div className={styles.subTitleLayer}>
            <Heading size='1' className={styles.subTitle}>
              오늘의 질문
            </Heading>
            <Image src={Info as StaticImageData} alt='info' />
          </div>
          <div className={styles.question}>
            <span>
              <InfoLayer text='연애' color='orange' />
            </span>
            <Body size='3'>Q. 그 날.. 그러지 말았어야 했던 내 행동은?</Body>
          </div>
        </hgroup>
      </CustomTopLayer>
      <article className={styles.topArticle}>
        <hgroup className={styles.topHgroup}>
          <div className={styles.topTitleLayer}>
            <Heading size='2'>가장 공감받은</Heading>
            <Heading size='2' className={styles.topTitleOrange}>
              TOP 5
            </Heading>
          </div>
          <Body size='3' className={styles.topTitleSubTitle}>
            현재 가장 인기 있는 글이야~
          </Body>
        </hgroup>
        <CustomTab />
        <div className={styles.itemGroup}>
          <CustomItem {...sampleData} />
          <CustomItem {...sampleData} />
          <CustomItem {...sampleData} />
          <CustomItem {...sampleData} />
          <CustomItem {...sampleData} />
        </div>
      </article>
    </div>
  );
}
