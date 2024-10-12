'use client';

import CustomTab from '@/app/(beforeLogin)/feed/_component/CustomTab';
import CustomChipGroup from '@/app/(beforeLogin)/feed/_component/CustomChipGroup';
import CustomItem from '@/app/(beforeLogin)/feed/_component/CustomItem';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCategory } from '@/app/(beforeLogin)/_state/useCategory';
import { useFeed } from '@/app/(beforeLogin)/feed/_state/useFeed';
import Select from '@/app/components/select/Select';

import * as styles from './page.css';
import { useInView } from 'react-intersection-observer';

enum FeedOptionEnum {
  age,
  category,
  filter,
}

enum FeedFilterEnum {
  '최신' = '',
  '채택된' = 'adopted',
  '댓글' = 'commentCnt',
  '좋아요' = 'vote',
}

export default function FeedPage() {
  const [filter, setFilter] = useState<Record<FeedOptionEnum, string | number>>(
    {
      [FeedOptionEnum.age]: 0,
      [FeedOptionEnum.category]: '전체',
      [FeedOptionEnum.filter]: FeedFilterEnum.최신,
    },
  );
  const divRef = useRef<HTMLDivElement | null>(null);

  const onTrackableFilter =
    (key: FeedOptionEnum) => (value: string | number) => {
      setFilter({ ...filter, [key]: value });
    };

  const { localData: categoryData } = useCategory();

  const chipData = useMemo(() => {
    const data = categoryData.map((datum) => datum.name);

    return ['전체', ...data];
  }, [categoryData]);

  const selectData = useMemo(
    () =>
      Object.entries(FeedFilterEnum).map((entry) => {
        return {
          value: entry[1],
          label: `${entry[0]} 순`,
        };
      }),
    [],
  );

  const { localData, hasNextPage, fetchNextPage } = useFeed({
    age: filter[FeedOptionEnum.age] as number,
    category: filter[FeedOptionEnum.category] as string,
    sort: filter[FeedOptionEnum.filter] as string,
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = (node: HTMLDivElement | null) => {
    ref(node!);
    divRef.current = node;
  };

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <section className={styles.section}>
      <CustomTab onTrackable={onTrackableFilter(FeedOptionEnum.age)} />
      <article className={styles.listArticle}>
        <CustomChipGroup
          data={chipData}
          defaultSelect='전체'
          onTrackable={onTrackableFilter(FeedOptionEnum.category)}
        />
        <div className={styles.selectLayer}>
          <Select
            data={selectData}
            width={100}
            className={styles.select}
            onTrackable={onTrackableFilter(FeedOptionEnum.filter)}
          />
        </div>
        <div className={styles.itemGroup}>
          {localData.map((datum) => (
            <CustomItem
              key={datum.id}
              image={datum.img}
              nickname={datum.nickname}
              age={datum.age}
              title={datum.subject}
              thumbnail={datum.thumbnail}
              subTitle={datum.body}
              like={datum.vote}
              comment={datum.commentCnt}
              isAdopt={datum.isAdopte}
              hasAdopt
              isBookmark={datum.isBookmark}
              isLike={datum.isVoted}
              callback={datum.id as string}
              date={datum.createdAt}
            />
          ))}
          <div ref={setRefs} />
        </div>
      </article>
    </section>
  );
}
