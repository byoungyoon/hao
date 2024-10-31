'use client';

import { FeedResponseTypes } from '@/app/(beforeLogin)/feed/_lib/getFeed';
import { usePathname, useRouter } from 'next/navigation';
import Card from '@/app/components/card/Card';
import Body from '@/app/components/text/Body';
import { useFeedList } from '@/app/(beforeLogin)/_state/useFeedList';
import { QueryKey } from '@tanstack/react-query';

import * as styles from './feedList.css';

type Props<T> = {
  queryKey: T;
  queryFn: (props: {
    pageParam?: number;
    queryKey: T;
  }) => Promise<FeedResponseTypes>;

  hasTotal?: boolean;
};

export default function FeedList<T extends QueryKey>({
  queryKey,
  queryFn,
  hasTotal = true,
}: Props<T>) {
  const router = useRouter();
  const pathname = usePathname();

  const { localData, setRefs } = useFeedList<T>({ queryKey, queryFn });

  const onClickCard = (detail: number) => () => {
    router.push(`${pathname}/${detail}?bar=false`);
  };

  return (
    <>
      {hasTotal && <Body size='5'>총 {localData.length}건</Body>}
      <div className={styles.group}>
        {localData.map((datum) => (
          <Card
            key={datum.id}
            user={{
              age: datum.age,
              nickname: datum.nickname,
              profill: datum.img,
            }}
            data={{
              id: datum.id,
              date: datum.createdAt,
              title: datum.subject,
              subTitle: datum.body,
              thumbnail: datum.thumbnail,
              voteCount: datum.vote,
              commentCount: datum.commentCnt,
              questionCategory: datum.category,
              question: datum.todayQuestion,
            }}
            option={{
              isScrap: datum.isBookmark,
              isVote: datum.isVoted,
              isAdopt: datum.isAdopted,
            }}
            onClick={onClickCard(datum.id)}
          />
        ))}
        <div ref={setRefs} />
      </div>
    </>
  );
}
