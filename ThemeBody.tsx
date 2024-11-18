'use client';

import { ReactNode } from 'react';
import cx from 'classnames';
import { useTheme } from '@/app/store/useTranslate';

import * as styles from '@/app/theme.css';
import * as layoutStyles from '@/app/layout.css';

type Props = {
  children: ReactNode;
};

export default function ThemeBody({ children }: Props) {
  const { theme } = useTheme();

  return (
    <body
      className={cx(
        theme === 'default' ? styles.themeClass : styles.eventThemeClass,
        layoutStyles.body,
      )}
    >
      {children}
    </body>
  );
}
