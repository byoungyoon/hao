import { ReactNode } from 'react';
import Body from '@/app/components/text/Body';
import * as styles from './navigation.css';

type Props = {
  /**
   * left react node
   */
  left?: ReactNode;
  /**
   * right react node
   */
  right?: ReactNode;
  /**
   * center text
   */
  text?: string;
};

/**
 * navigation
 */
export default function Navigation({ left, right, text }: Props) {
  return (
    <div className={styles.navigation}>
      <div className={styles.left}>{left}</div>
      <Body size='1'>{text}</Body>
      <div className={styles.right}>{right}</div>
    </div>
  );
}
