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
          <img className={styles['lava-lamp']} src="/images/lavalamp_blue.gif" alt="lava lamp" />
          <img src="/images/kittyani.gif" alt="kitty" />
        </div>

        <div className={styles['header-container']}>
          <div className={styles['header-logo']}>band name</div>
        </div>
        <main className={styles['main-container']}>
          <nav className={styles['main-nav']}>
            <Link href="/">Home</Link>
            <Link href="/live">Live</Link>
          </nav>
          {children}
        </main>

        <div className={cn(styles['right-container'], styles['side-container'])}>
          <img className={styles['lava-lamp']} src="/images/lavalamp_blue.gif" alt="lava lamp" />
          <img className="reversed" src="/images/kittyani.gif" alt="kitty" />
        </div>
      </body>
    </html>
  );
}
