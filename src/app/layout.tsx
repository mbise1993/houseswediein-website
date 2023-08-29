import { Metadata } from 'next';
import Link from 'next/link';

import './globals.css';
import styles from './layout.module.css';
import { cn } from '@/util/cn';

export const metadata: Metadata = {
  title: 'band name',
  description: 'Website for band name',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={cn(styles['left-container'], styles['side-container'])}>
          <img className={styles['lava-lamp-img']} src="/images/lava-lamp.gif" alt="lava lamp" />
          <img src="/images/black-cat.gif" alt="black cat" />
        </div>

        <div className={styles['header-container']}>
          <div className={styles['header-logo']}>band name</div>
        </div>
        <main className={styles['main-container']}>
          <nav className={styles['nav']}>
            <Link className={styles['nav-item']} href="/">
              Home
            </Link>
            <Link className={styles['nav-item']} href="/live">
              Live
            </Link>
            <Link className={styles['nav-item']} href="/links">
              Links
            </Link>
            <Link className={styles['nav-item']} href="/lyrics">
              Lyrics
            </Link>
            <Link className={styles['nav-item']} href="/tabs">
              Tabs
            </Link>
          </nav>
          {children}
        </main>
        <div className={styles['footer-container']}>
          <div className={styles['footer-buttons']}>
            <img src="/images/bookmark-button.gif" alt="bookmark" />
            <Link href="/very-important">
              <img src="/images/click-here-button.gif" alt="click here" />
            </Link>
          </div>
          <div className={styles['hit-counter']}>HIT COUNTER</div>
        </div>

        <div className={cn(styles['right-container'], styles['side-container'])}>
          <img className={styles['lava-lamp-img']} src="/images/lava-lamp.gif" alt="lava lamp" />
          <img className="reversed" src="/images/black-cat.gif" alt="black cat" />
        </div>
      </body>
    </html>
  );
}
