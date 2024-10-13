'use client';

import { useFeedComment } from '@/app/(beforeLogin)/feed/[detail]/_state/useFeedComment';
import CustomComment from '@/app/(beforeLogin)/feed/[detail]/_component/CustomComment';

type Props = {
  id: number;
};

export default function CustomCommentList({ id }: Props) {
  const { localData: commentData } = useFeedComment({ id: id });

  //TODO isAdmin 이 로그인 후 해야함
  return (
    <div>
      {commentData.map((datum) => (
        <CustomComment
          key={datum.id}
          image={datum.img}
          nickname={datum.nickname}
          date={datum.createdAt}
          age={datum.age}
          comment={datum.body}
          likeCount={datum.vote}
          isLike={datum.isVoted}
          isEdit={datum.isWriter}
          isSelect={datum.isAdopted}
        />
      ))}
    </div>
  );
}
