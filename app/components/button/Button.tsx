import ButtonText from '@/app/components/text/ButtonText';
import cx from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import * as styles from './button.css';

type Props = {
  size: 'small' | 'long';
  color: 'gray' | 'orange';
  text: string;
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
      className={cx(styles.button, size, color, className)}
      {...rest}
    >
      <ButtonText size='1'>{text}</ButtonText>
    </button>
  );
}
