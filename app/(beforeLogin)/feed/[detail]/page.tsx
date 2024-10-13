import { useMemo } from 'react';
import CustomCommentInput from '@/app/(beforeLogin)/feed/[detail]/_component/CustomCommentInput';
import SuspenseFeedOne from '@/app/(beforeLogin)/feed/[detail]/_component/SuspenseFeedOne';
import CustomDetailItem from '@/app/(beforeLogin)/feed/[detail]/_component/CustomDetailItem';
import CustomDetailReport from '@/app/(beforeLogin)/feed/[detail]/_component/CustomDetailReport';
import CustomCommentList from '@/app/(beforeLogin)/feed/[detail]/_component/CustomCommentList';

import * as styles from './page.css';

type Props = {
  params: { detail: string };
};

export default function FeedDetailPage({ params }: Props) {
  const id = useMemo(() => +params.detail, [params.detail]);

  return (
    <section className={styles.section}>
      <SuspenseFeedOne id={id}>
        <CustomDetailItem id={id} />
        <div className={styles.border} />
        <article className={styles.commentArticle}>
          <CustomDetailReport id={id} />
          <CustomCommentList id={id} />
        </article>
        <div className={styles.input}>
          <CustomCommentInput />
        </div>
      </SuspenseFeedOne>
    </section>
  );
}
