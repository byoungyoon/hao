'use client';

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
import CustomItem from '@/app/(beforeLogin)/home/_component/CustomItem';
import { useToday } from '@/app/(beforeLogin)/home/_state/useToday';
import { useTop5 } from '@/app/(beforeLogin)/home/_state/useTop5';
import { useState } from 'react';

import * as styles from './page.css';

dayjs.extend(localizedFormat);
dayjs.locale('ko');

export default function HomePage() {
  const [age, setAge] = useState(0);

  const onTrackableTab = (value: number) => {
    setAge(value);
  };

  const { localData: todayData } = useToday();
  const { localData: top5Data } = useTop5({ age: age });

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
              <InfoLayer text={todayData.category} color='orange' />
            </span>
            <Body size='3'>{todayData.body}</Body>
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
        <CustomTab onTrackable={onTrackableTab} />
        <div className={styles.itemGroup}>
          {top5Data.map((datum, index) => (
            <CustomItem
              key={index}
              num={index + 1}
              image={datum.thumbnail}
              title={datum.subject}
              subTitle={datum.body}
              like={datum.vote}
              comment={datum.commentCnt}
              isLike={datum.isVoted}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
