import SuspenseFeedOne from '@/app/components/template/feedOne/_component/SuspenseFeedOne';
import CustomDetailItem from '@/app/components/template/feedOne/_component/CustomDetailItem';
import CustomDetailReport from '@/app/components/template/feedOne/_component/CustomDetailReport';
import CustomCommentList from '@/app/components/template/feedOne/_component/CustomCommentList';
import CustomCommentInput from '@/app/components/template/feedOne/_component/CustomCommentInput';

import * as styles from './feedOne.css';
import { Suspense } from 'react';

type Props = {
  id: number;
};

export default function FeedOne({ id }: Props) {
  return (
    <section className={styles.section}>
      <SuspenseFeedOne id={id}>
        <Suspense fallback={<>loading...</>}>
          <CustomDetailItem id={id} />
        </Suspense>
        <div className={styles.border} />
        <article className={styles.commentArticle}>
          <CustomDetailReport id={id} />
          <Suspense fallback={<>loading...</>}>
            <CustomCommentList id={id} />
          </Suspense>
        </article>
        <div className={styles.input}>
          <CustomCommentInput id={id} />
        </div>
      </SuspenseFeedOne>
    </section>
  );
}
