import CategoryTab from '@/app/components/tab/CategoryTab';

import * as styles from './page.css';

export default function MyFeedPage() {
  return (
    <section>
      <div className={styles.tabLayer}>
        <CategoryTab
          data={[
            { value: 0, text: '채택완료' },
            { value: 1, text: '미채택' },
          ]}
          defaultSelect={0}
        />
      </div>
    </section>
  );
}
