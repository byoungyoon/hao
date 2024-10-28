import * as styles from './toast.css';

type Props = {
  text: string;
  timeout?: number;
};

export default function Toast({ text, timeout = 3000 }: Props) {
  return (
    <div className={styles.toast}>
      {text}
      {timeout}
    </div>
  );
}
