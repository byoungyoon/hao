import type { Metadata } from 'next';
import './global.css';

import * as styles from './theme.css';

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
      <body className={styles.themeClass}>{children}</body>
    </html>
  );
}
