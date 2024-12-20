import CustomDetailItem from '@/app/components/template/feedOne/_component/CustomDetailItem';
import CustomDetailReport from '@/app/components/template/feedOne/_component/CustomDetailReport';
import CustomCommentList from '@/app/components/template/feedOne/_component/CustomCommentList';
import CustomCommentInput from '@/app/components/template/feedOne/_component/CustomCommentInput';
import HeartCanvas from '@/app/components/canvas/HeartCanvas';
import CustomNext from '@/app/components/template/feedOne/_component/CustomNext';
import CustomToast from '@/app/(beforeLogin)/_component/CustomToast';

import * as styles from './feedOne.css';

type Props = {
  id: number;
};

export default function FeedOne({ id }: Props) {
  return (
    <section id='feedOne' className={styles.section}>
      <CustomDetailItem id={id} />
      <div className={styles.border} />
      <article className={styles.commentArticle}>
        <div className={styles.reportLayer}>
          <CustomDetailReport id={id} />
        </div>
        <CustomCommentList id={id} />
        <CustomNext id={id} />
      </article>
      <div className={styles.input}>
        <CustomCommentInput id={id} />
      </div>
      <HeartCanvas id='feedOne' />
      <CustomToast bottom={88} />
    </section>
  );
}
