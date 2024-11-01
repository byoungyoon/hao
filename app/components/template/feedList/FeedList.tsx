'use client';

import { FeedResponseTypes } from '@/app/(beforeLogin)/feed/_lib/getFeed';
import { usePathname, useRouter } from 'next/navigation';
import Card from '@/app/components/card/Card';
import Body from '@/app/components/text/Body';
import { useFeedList } from '@/app/(beforeLogin)/_state/useFeedList';
import { QueryKey } from '@tanstack/react-query';

import * as styles from './feedList.css';
import { useTopButton } from '@/app/store/useTranslate';
import { useEffect } from 'react';

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

  const action = useTopButton((state) => state.action);

  const { localData, setRefs } = useFeedList<T>({ queryKey, queryFn });

  const onClickCard = (detail: number) => () => {
    router.push(`${pathname}/${detail}`);
  };

  useEffect(() => {
    action(true);

    return () => action(false);
  }, []);

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
              question: datum.subject,
            }}
            option={{
              isScrap: datum.isBookmark,
              isVote: datum.isVoted,
              isAdopt: datum.isAdopted,
              isQuestion: datum.isQuestion,
            }}
            onClick={onClickCard(datum.id)}
          />
        ))}
        <div ref={setRefs} />
      </div>
    </>
  );
}
