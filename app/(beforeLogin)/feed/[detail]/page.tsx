import CSample from '@/app/image/sample/cSample.png';
import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';
import CustomComment from '@/app/(beforeLogin)/feed/[detail]/_component/CustomComment';
import CustomCommentInput from '@/app/(beforeLogin)/feed/[detail]/_component/CustomCommentInput';
import { StaticImageData } from 'next/image';

import * as styles from './page.css';

type Props = {
  params: { detail: string };
};

export default function FeedDetailPage({ params }: Props) {
  console.log(params);

  const sample2 = {
    image: CSample as StaticImageData,
    nickname: '정재현내꺼',
    date: '2024.09.28',
    age: 10,
    comment: '완전 재밌었겠는데 ㅋㅋㅋㅋ 나도 보고싶다!!!',
    likeCount: 34,
  };

  return (
    <section>
      {/*<CustomItem hasAdopt={false} height={221} {...sample} />*/}
      <div className={styles.border} />
      <article className={styles.commentArticle}>
        <CustomReport mode='후시딘' />
        <div>
          <CustomComment {...sample2} />
          <CustomComment isEdit {...sample2} />
          <CustomComment isAdmin {...sample2} />
          <CustomComment isAdmin isSelect {...sample2} />
          <CustomComment isLike {...sample2} />
        </div>
      </article>
      <div className={styles.input}>
        <CustomCommentInput />
      </div>
    </section>
  );
}
