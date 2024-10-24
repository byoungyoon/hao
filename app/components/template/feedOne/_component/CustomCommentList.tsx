'use client';

import CustomComment from '@/app/components/template/feedOne/_component/CustomComment';
import { useFeedComment } from '@/app/components/template/feedOne/_state/useFeedComment';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useFeedOne } from '@/app/components/template/feedOne/_state/useFeedone';
import { useMemo } from 'react';

type Props = {
  id: number;
};

export default function CustomCommentList({ id }: Props) {
  const { localData: commentData } = useFeedComment({ id: id });
  const { localData: userData } = useUser();
  const { localData: feedData } = useFeedOne({ id: id });

  const hasAdopted = useMemo(
    () => !commentData.some((comment) => comment.isAdopted),
    [commentData],
  );

  return (
    <div>
      {commentData.map((datum) => (
        <CustomComment
          key={datum.id}
          id={datum.id}
          feedId={id}
          image={datum.img}
          nickname={datum.nickname}
          date={datum.createdAt}
          age={datum.age}
          comment={datum.body}
          likeCount={datum.vote}
          isLike={datum.isVoted}
          isEdit={datum.isWriter}
          isSelect={datum.isAdopted}
          hasSelect={hasAdopted}
          isAdmin={feedData.userId === userData.userId}
          isHost={feedData.userId === datum.userId}
        />
      ))}
    </div>
  );
}
