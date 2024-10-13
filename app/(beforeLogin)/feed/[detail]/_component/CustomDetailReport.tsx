'use client';

import { useFeedOne } from '@/app/(beforeLogin)/feed/[detail]/_state/useFeedone';
import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';

type Props = {
  id: number;
};

export default function CustomDetailReport({ id }: Props) {
  const { localData: feedData } = useFeedOne({ id: id });

  //TODO type 로그인 후 해야함
  return <CustomReport mode={feedData.type} />;
}
