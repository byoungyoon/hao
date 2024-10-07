import CustomTopLayer from '@/app/(beforeLogin)/home/_component/CustomTopLayer';
import Heading from '@/app/components/text/Heading';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ko';

import * as styles from './page.css';

dayjs.extend(localizedFormat);
dayjs.locale('ko');

export default function HomePage() {
  return (
    <div className={styles.layer}>
      <CustomTopLayer>
        <hgroup className={styles.hgroup}>
          <Heading size='1'>{dayjs().format('M월 D일 dddd')}</Heading>
          <div className={styles.subTitleLayer}>
            <Heading size='1' className={styles.subTitle}>
              오늘의 질문
            </Heading>
          </div>
        </hgroup>
      </CustomTopLayer>
    </div>
  );
}
