'use client';

import Heading from '@/app/components/text/Heading';
import { useMy } from '@/app/(beforeLogin)/my/_state/useMy';

export default function CustomTitle() {
  const { localData: myData } = useMy();

  return (
    <div>
      {myData.boardCnt !== 0 ? (
        <>
          <Heading size='2'>지금까지 뱉은 후회 {myData.boardCnt}개 중</Heading>
          <Heading size='2'>
            <strong>{myData.adoptedCnt}개</strong>를 후~ 날렸어
          </Heading>
        </>
      ) : (
        <Heading size='2'>마음이 텅 비었어...</Heading>
      )}
    </div>
  );
}
