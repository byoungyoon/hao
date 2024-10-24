import Body from '@/app/components/text/Body';
import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';
import CustomImage from '@/app/(beforeLogin)/writing/_component/CustomImage';
import CustomInput from '@/app/(beforeLogin)/writing/_component/CustomInput';
import CustomTextarea from '@/app/(beforeLogin)/writing/_component/CustomTextarea';
import CustomOptionGroup from '@/app/(beforeLogin)/writing/_component/CustomOptionGroup';
import SuspenseCategory from '@/app/(beforeLogin)/writing/_suspense/SuspenseCategory';
import { Suspense } from 'react';
import CustomButton from '@/app/(beforeLogin)/writing/_component/CustomButton';

import * as styles from './page.css';

export default function WritingPage() {
  return (
    <section className={styles.section}>
      <article className={styles.writingArticle}>
        <div className={styles.categoryLayer}>
          <Suspense>
            <SuspenseCategory />
          </Suspense>
        </div>
        <CustomInput />
        <div className={styles.textareaLayer}>
          <CustomTextarea />
        </div>
        <CustomReport />
        <div className={styles.imageGroupLayer}>
          <CustomImage />
        </div>
      </article>
      <article className={styles.optionArticle}>
        <Body size='1'>내가 원하는 답변은</Body>
        <CustomOptionGroup />
        <CustomButton />
      </article>
    </section>
  );
}
