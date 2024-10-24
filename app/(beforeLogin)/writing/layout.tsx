import { ReactNode } from 'react';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import CustomBackButton from '@/app/(beforeLogin)/writing/_component/CustomBackButton';

type Props = {
  children: ReactNode;
};

export default function WritingLayout({ children }: Props) {
  return (
    <Layout text='글 쓰기' left={<CustomBackButton />}>
      {children}
    </Layout>
  );
}
