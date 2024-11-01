import { Suspense } from 'react';
import SuspenseCategory from '@/app/(beforeLogin)/writing/_suspense/SuspenseCategory';
import CustomQuestion from '@/app/(beforeLogin)/writing/_component/CustomQuestion';
import CustomTextarea from '@/app/(beforeLogin)/writing/_component/CustomTextarea';
import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';
import CustomImage from '@/app/(beforeLogin)/writing/_component/CustomImage';
import Body from '@/app/components/text/Body';
import CustomOptionGroup from '@/app/(beforeLogin)/writing/_component/CustomOptionGroup';
import CustomButton from '@/app/(beforeLogin)/writing/_component/CustomButton';

import * as styles from '@/app/(beforeLogin)/writing/page.css';

export default function WritingModifyTodayPage() {
  return (
    <section className={styles.section}>
      <article className={styles.writingArticle}>
        <div className={styles.categoryLayer}>
          <Suspense>
            <SuspenseCategory isDisabled />
          </Suspense>
        </div>
        <CustomQuestion />
        <CustomTextarea isQuestion />
        <CustomReport mode='다중' />
        <div className={styles.imageGroupLayer}>
          <CustomImage />
        </div>
      </article>
      <article className={styles.optionArticle}>
        <Body size='1'>내가 원하는 답변은</Body>
        <CustomOptionGroup />
        <CustomButton isQuestion />
      </article>
    </section>
  );
}
