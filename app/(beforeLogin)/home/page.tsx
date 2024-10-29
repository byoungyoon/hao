import CustomTopLayer from '@/app/(beforeLogin)/home/_component/CustomTopLayer';
import Heading from '@/app/components/text/Heading';
import Info from '@/app/icon/info.png';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ko';
import Image, { StaticImageData } from 'next/image';
import Body from '@/app/components/text/Body';
import CustomTab from '@/app/(beforeLogin)/home/_component/CustomTab';
import SuspenseToday from '@/app/(beforeLogin)/home/_suspense/SuspenseToday';
import SuspenseTopFeed from '@/app/(beforeLogin)/home/_suspense/SuspenseTopFeed';

import * as styles from './page.css';

dayjs.extend(localizedFormat);
dayjs.locale('ko');

export default function HomePage() {
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
          <SuspenseToday />
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
        <SuspenseTopFeed />
      </article>
    </div>
  );
}
