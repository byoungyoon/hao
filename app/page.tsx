import styles from './page.module.css';
import Heading from '@/app/components/text/Heading';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Heading size='1'>test</Heading>
      </main>
    </div>
  );
}
