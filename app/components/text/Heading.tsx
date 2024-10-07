import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import * as styles from './heading.css';

type Props = {
  size: '1' | '2';
};

export default function Heading(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > &
    Props,
) {
  const { size, children, className, ...rest } = props;

  return (
    <h3 className={cx(styles.heading, size, className)} {...rest}>
      {children}
    </h3>
  );
}
