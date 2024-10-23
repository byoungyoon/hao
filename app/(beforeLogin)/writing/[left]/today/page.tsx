import CustomCategory from '@/app/(beforeLogin)/writing/_component/CustomCategory';
import CustomQuestion from '@/app/(beforeLogin)/writing/_component/CustomQuestion';
import CustomTextarea from '@/app/(beforeLogin)/writing/_component/CustomTextarea';
import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';
import CustomImage from '@/app/(beforeLogin)/writing/_component/CustomImage';
import Body from '@/app/components/text/Body';
import CustomOptionGroup from '@/app/(beforeLogin)/writing/_component/CustomOptionGroup';
import CustomButton from '@/app/(beforeLogin)/writing/_component/CustomButton';

import * as styles from '@/app/(beforeLogin)/writing/page.css';

export default function WritingTodayPage() {
  return (
    <section className={styles.section}>
      <article className={styles.writingArticle}>
        <div className={styles.categoryLayer}>
          <CustomCategory isQuestion />
        </div>
        <CustomQuestion />
        <div className={styles.textareaLayer}>
          <CustomTextarea isQuestion />
        </div>
        <CustomReport />
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
