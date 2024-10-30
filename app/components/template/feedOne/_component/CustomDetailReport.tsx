'use client';

import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';
import { useFeedOne } from '@/app/components/template/feedOne/_state/useFeedone';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';

type Props = {
  id: number;
};

export default function CustomDetailReport({ id }: Props) {
  const { localData: feedData } = useFeedOne({ id: id });
  const { localData: userData } = useUser();

  return (
    <CustomReport
      mode={feedData.userId === userData.userId ? '작성자' : feedData.type}
    />
  );
}
