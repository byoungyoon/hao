import ButtonText from '@/app/components/text/ButtonText';
import cx from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import * as styles from './button.css';

type Props = {
  size: 'small' | 'long' | 'auto';
  color: 'gray' | 'orange';
  text: string | ReactNode;
};

export default function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    Props,
) {
  const { size, color, text, className, ...rest } = props;

  return (
    <button
      type='button'
      className={cx(styles.button, size, color, className && className)}
      {...rest}
    >
      <ButtonText size='1'>{text}</ButtonText>
    </button>
  );
}
