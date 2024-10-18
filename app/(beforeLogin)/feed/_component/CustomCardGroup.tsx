'use client';

import { useFeed } from '@/app/(beforeLogin)/feed/_state/useFeed';
import { useFeedForm } from '@/app/store/useTranslate';
import Card from '@/app/components/card/Card';
import { usePathname, useRouter } from 'next/navigation';

export default function CustomCardGroup() {
  const { age, category, sort } = useFeedForm();
  const router = useRouter();
  const pathname = usePathname();

  const { localData } = useFeed({
    age: age,
    category: category,
    sort: sort,
  });

  const onClickCard = (id: number) => () => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <>
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
    </>
  );
}
