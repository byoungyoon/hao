'use client';

import { useFeed } from '@/app/(beforeLogin)/feed/_state/useFeed';
import { useFeedForm } from '@/app/store/useTranslate';
import Card from '@/app/components/card/Card';
import { usePathname, useRouter } from 'next/navigation';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';
import CustomNext from '@/app/(beforeLogin)/feed/_component/CustomNext';

import * as styles from './customCardGroup.css';

export default function CustomCardGroup() {
  const router = useRouter();
  const pathname = usePathname();

  const { age, category, sort } = useFeedForm();

  const { localData } = useFeed({
    age: age,
    category: category,
    sort: sort,
  });
  const { localData: localTodayData } = useToday();

  const onClickCard = (id: number) => () => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <div className={styles.group}>
      {localData.map((datum) => (
        <Card
          key={datum.id}
          user={{
            age: datum.age,
            profill: datum.img,
            nickname: datum.nickname,
          }}
          data={{
            thumbnail: datum.thumbnail,
            commentCount: datum.commentCnt,
            title: datum.subject,
            date: datum.createdAt,
            subTitle: datum.body,
            voteCount: datum.vote,
            question: localTodayData.body,
            questionCategory: localTodayData.category,
          }}
          option={{
            isAdopt: datum.isAdopte,
            isVote: datum.isVoted,
            isScrap: datum.isBookmark,
            isQuestion: datum.isQuestion,
          }}
          onClick={onClickCard(datum.id)}
        />
      ))}
      <CustomNext />
    </div>
  );
}
