'use client';

import Heading from '@/app/components/text/Heading';
import Body from '@/app/components/text/Body';
import CustomChartItem from '@/app/(beforeLogin)/my/[text]/_component/CustomChartItem';
import { useMy } from '@/app/(beforeLogin)/my/_state/useMy';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import Button from '@/app/components/button/Button';
import Image from 'next/image';
import MyButton from '@/app/icon/my-button.png';
import Arrow from '@/app/icon/arrow-white.png';
import { useRouter } from 'next/navigation';
import { makeNickname } from '@/app/util/makeNickname';
import { useCategory } from '@/app/(beforeLogin)/_state/useCategory';
import { useMemo } from 'react';
import { MyReportDataTypes } from '@/app/(beforeLogin)/my/_lib/getMy';

import * as styles from './customReport.css';

export default function CustomReport() {
  const router = useRouter();

  const { localData: myData } = useMy();
  const { localData: userData } = useUser();
  const { localData: categoryData } = useCategory();

  const reportData = useMemo(() => {
    const data = categoryData.map((datum) => datum.name);

    const onMerge = (currData: MyReportDataTypes[]) => {
      if (currData.length >= 3) return currData;

      const filter = data.filter(
        (datum) => !currData.map((datum) => datum.category).includes(datum),
      );
      return onMerge(
        currData.concat({
          category: filter[Math.floor(Math.random() * filter.length)],
          count: 0,
        }),
      );
    };
    return onMerge(myData.report);
  }, [myData, categoryData]);

  const onClickReport = () => {
    router.push('/writing');
  };

  const onClickItem = (item: string) => () => {
    router.push(`/my/스크랩/scrap/${item}`);
  };

  if (myData.report.length === 0)
    return (
      <div className={styles.noReportLayer}>
        <Body size='3' className={styles.noReportTitle}>
          아직 후회를 작성하지 않아서 정보가 부족해
        </Body>
        <Button
          size='long'
          text={
            <div className={styles.noReportButtonLayer}>
              <Image src={MyButton} alt='my' className={styles.noReportImage} />
              <Body size='4' className={styles.noReportButtonText}>
                후회 작성하고 내 리포트 확인하기
              </Body>
              <Image src={Arrow} alt='arrow' />
            </div>
          }
          color='orange'
          onClick={onClickReport}
        />
      </div>
    );

  return (
    <div className={styles.reportLayer}>
      <Heading size='2'>
        {userData.nickname}
        {makeNickname(userData.nickname)}
      </Heading>
      <Heading size='2'>
        &apos;
        <strong>{myData.report[0].category}</strong>
        &apos;에 제일 많은 후회를 했어
      </Heading>
      <Body size='5' className={styles.reportAside}>
        과거의 후회를 되돌아보며 더 나은 내가 되어보자!
      </Body>
      <div className={styles.chart}>
        {reportData.length > 1 && (
          <CustomChartItem
            text={reportData[1].category}
            rank={2}
            count={reportData[1].count}
            onClick={onClickItem(reportData[1].category)}
          />
        )}
        <CustomChartItem
          text={reportData[0].category}
          rank={1}
          count={reportData[0].count}
          onClick={onClickItem(reportData[0].category)}
        />
        {reportData.length > 2 && (
          <CustomChartItem
            text={reportData[2].category}
            rank={3}
            count={reportData[2].count}
            onClick={onClickItem(reportData[2].category)}
          />
        )}
      </div>
    </div>
  );
}
