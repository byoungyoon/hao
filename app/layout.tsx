import type { Metadata } from 'next';
import './global.css';

import cx from 'classnames';
import CustomTree from '@/app/components/tree/CustomTree';

import * as styles from './theme.css';
import * as layoutStyles from './layout.css';

export const metadata: Metadata = {
  title: '후~해',
  description: '후~ 한 번 불어보세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cx(styles.themeClass, layoutStyles.body)}>
        <div id='tree' className={layoutStyles.treeLayer}>
          <CustomTree />
        </div>
        {children}
      </body>
    </html>
  );
}
