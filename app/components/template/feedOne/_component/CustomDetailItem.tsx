'use client';

import DetailCard from '@/app/components/card/DetailCard';
import { useFeedOne } from '@/app/components/template/feedOne/_state/useFeedone';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';
import { useFeedVote } from '@/app/(beforeLogin)/_state/useFeedVote';
import { useFeedScrap } from '@/app/(beforeLogin)/_state/useFeedScrap';
import { useEffect, useMemo } from 'react';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useFeedDelete } from '@/app/components/template/feedOne/_state/useFeedDelete';
import { useClient } from '@/app/store/useClient';

type Props = {
  id: number;
};

export default function CustomDetailItem({ id }: Props) {
  const { updateVote, updateScrap } = useClient();

  const { localData: feedData } = useFeedOne({ id: id });
  const { localData: todayData } = useToday();
  const { localData: userData } = useUser();

  const localVote = useMemo(() => {
    return {
      state: feedData.isLike,
      trueCount: feedData.isLike ? feedData.like : feedData.like + 1,
      falseCount: feedData.isLike ? feedData.like - 1 : feedData.like,
    };
  }, [feedData]);

  const { onVote } = useFeedVote({ id: id, vote: localVote });
  const { onScrap } = useFeedScrap({ id: id, state: feedData.isBookmark });
  const { onDelete } = useFeedDelete({ id: id });

  useEffect(() => {
    if (!feedData.id) return;

    updateVote(
      feedData.id,
      localVote.state,
      localVote.trueCount,
      localVote.falseCount,
    );
    updateScrap(feedData.id, feedData.isBookmark);
  }, [feedData, updateVote, updateScrap, localVote]);

  return (
    <DetailCard
      user={{
        age: feedData.age,
        profill: feedData.image,
        nickname: feedData.nickname,
      }}
      data={{
        thumbnail: feedData.thumbnail,
        date: feedData.date,
        title: feedData.title,
        subTitle: feedData.subTitle,
        voteCount: localVote.state ? localVote.trueCount : localVote.falseCount,
        commentCount: feedData.comment,
        question: todayData.body,
        questionCategory: todayData.category,
      }}
      option={{
        isQuestion: feedData.isQuestion,
        isScrap: feedData.isBookmark,
        isVote: localVote.state,
        isEdit: feedData.userId === userData.userId,
      }}
      onVote={onVote}
      onScrap={onScrap}
      onDelete={onDelete}
    />
  );
}
